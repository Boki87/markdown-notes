import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import ReactMarkdown from "react-markdown";


import {useDB} from '../../store'

import EditorHeader from './EditorHeader'

const NoteEditor = () => {
    const {activeCategory,categories, activeNote, setActiveNote, loading, notes} = useDB()

    const [showPreview, setShowPreview] = useState(false)

    const markdown = `
# Header 1\n\n
## Header 2\n\n

_ italic _\n\n

** bold **\n\n

<b> bold Html </b>\n\n

`;
    return (
        <StyledEditorWrapper>
            <EditorHeader showPreview={showPreview} setShowPreview={setShowPreview}/>

            {showPreview ? 
                <ReactMarkdown source={markdown} escapeHtml={false}/> :
                <textarea></textarea>
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
