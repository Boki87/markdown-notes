import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import {useDB} from '../../store'


import SearchBar from './SearchBar'
import NoteBtn from './NoteBtn'

const NotesBar = () => {

    const {activeCategory,categories, activeNote, setActiveNote, loading, notes} = useDB()

    const [filteredNotes, setFilteredNotes] = useState([])


    useEffect(() => {        
        let tempNotes = notes.filter(note => {            
            if(note.category === categories[activeCategory]) {
                return note
            }
        })

        setFilteredNotes(tempNotes)
    }, [activeCategory,notes,categories])


   

    return (
        <StyledNotesContainer>
            <SearchBar />
                
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