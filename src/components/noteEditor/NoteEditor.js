import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import Markdown from 'markdown-to-jsx';




import {useDB} from '../../store'

import EditorHeader from './EditorHeader'

const NoteEditor = () => {
    const {activeCategory,categories, activeNote, setActiveNote, loading, updateNote} = useDB()

    const [showPreview, setShowPreview] = useState(false)

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


    return (
        <StyledEditorWrapper>
            <EditorHeader showPreview={showPreview} setShowPreview={setShowPreview}/>

            {showPreview ? 
                <Markdown children={markdown}/> :
                <textarea value={markdown} onChange={onChange}></textarea>
            }                                                       
        </StyledEditorWrapper>
    )
}

export default NoteEditor   


const StyledEditorWrapper = styled.div`
flex: 1;
min-width: 200px;
overflow: auto;

`
