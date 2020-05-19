import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import {useDB} from '../../store'


import SearchBar from './SearchBar'
import NoteBtn from './NoteBtn'

const NotesBar = () => {

    const {activeCategory,categories, activeNote, setActiveNote, loading, notes} = useDB()

    const [filteredNotes, setFilteredNotes] = useState([])

    const [filterQuery, setFilterQuery] = useState('')

    const filterByCat = () => {
        let tempNotes = notes.filter(note => {            
            if(note.category === categories[activeCategory]) {
                return note
            }
        })

        setFilteredNotes(tempNotes)
    }

    useEffect(() => {        
        filterByCat()
    }, [activeCategory,notes,categories])


    useEffect(() => {

        if(filterQuery != '') {
            let tempNotes = notes.filter(note => {            
                if(note.category === categories[activeCategory] && note.noteBody.toLowerCase().includes(filterQuery.toLowerCase())) {
                    return note
                }
            })
    
            setFilteredNotes(tempNotes)
        }else{
            filterByCat()
        }

    }, [filterQuery])
   

    return (
        <StyledNotesContainer>
            <SearchBar setFilterQuery={setFilterQuery}/>
                
            {filteredNotes.length > 0 && filteredNotes.map(note => <NoteBtn title={note.noteBody} id={note.id} key={note.id}/>)}


            </StyledNotesContainer>
    )
}

export default NotesBar


const StyledNotesContainer = styled.div`
    height:100%;
    width:300px;
    background: var(--text-color);
    color: var(--bg);
    border-right: 1px solid var(--bg);
`