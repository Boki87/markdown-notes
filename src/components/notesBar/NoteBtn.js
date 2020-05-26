import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Markdown from 'markdown-to-jsx';
import {useDB} from '../../store'

const NoteBtn = ({title, id}) => {

    const {activeNote, setActiveNote, notes} = useDB()

    
    const setActiveNoteHandler = (id) => {
        setActiveNote(notes.filter(note => note.id === id)[0])
    }

    return (
        <StyledNoteBtn onClick={() => setActiveNoteHandler(id)} id={id} activeNote={activeNote.id}>
            
            <Markdown children={title}/>
        </StyledNoteBtn>
    )
}

export default NoteBtn


const StyledNoteBtn = styled.div`
    position: relative;
    height:110px;
    overflow: hidden;
    width:100%;
    padding-left:20px;
    border-bottom: 1px solid #ccc;
    
    background: ${({activeNote, id}) => activeNote === id ? 'var(--bg)' : 'var(--body-bg)'};
    color: ${({activeNote, id}) => activeNote === id ? '#fff' : '#333'};
    &:hover {
        cursor: pointer;
        filter: brightness(90%);
    }
`