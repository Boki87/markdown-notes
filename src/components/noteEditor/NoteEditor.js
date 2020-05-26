import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Markdown from 'markdown-to-jsx';




import {useDB, useModal} from '../../store'

import EditorHeader from './EditorHeader'

const NoteEditor = () => {
    const {activeCategory,categories, activeNote, setActiveNote, loading, updateNote, delNote} = useDB()

    const {openConfirmModal, hideConfirmModal} = useModal()

    const [showPreview, setShowPreview] = useState(true)

    const [markdown, setMarkdown] = useState('')

    useEffect(() => {
        if(activeNote) {
            setMarkdown(activeNote.noteBody)
        }
    }, [activeNote])

    
    const onChange = (e) => {
        setMarkdown(e.target.value)
        updateNote({...activeNote, noteBody: e.target.value})
    }

    const delHandler = () => {
        
        openConfirmModal('Sure you want to delete this note?', () => {
            delNote(activeNote.id)
            hideConfirmModal()
        })
    }


    return (
        <StyledEditorWrapper activeNote={activeNote}>
            <EditorHeader showPreview={showPreview} setShowPreview={setShowPreview} delNote={delHandler}/>

            {showPreview ? 
                <Markdown className='markdown-body' style={{flex:1,overflow:'auto',padding:'20px',background:'#fff'}} children={markdown}/> :
                <StyledTextarea value={markdown} onChange={onChange}></StyledTextarea>
            }                                                       
        </StyledEditorWrapper>
    )
}

export default NoteEditor   


const StyledEditorWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 200px;
    overflow: auto;
    pointer-events: ${({activeNote}) => activeNote.id != -1 ? 'auto':'none'};
    background: #fff;
`
const StyledTextarea = styled.textarea`       
    height:100%;
    border: none;
    flex:1;
    overflow: auto;
    padding: 20px;
    background: var(--bg);
    color: var(--text-color);
    font-size: 1.1rem;
    letter-spacing: 1px;
    resize: none;
`