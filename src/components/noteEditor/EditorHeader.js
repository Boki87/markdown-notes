import React, {useState} from 'react'
import styled from 'styled-components'
import Switch from 'react-toggle-switch'

const EditorHeader = ({showPreview, setShowPreview}) => {

    

    return (
        <StyledHeader>
            {JSON.stringify(showPreview)}
            <Switch onClick={() => {setShowPreview(() => {return !showPreview})}} on={showPreview}/>
        </StyledHeader>
    )
}

export default EditorHeader


const StyledHeader = styled.div`
    width:100%;
    height:40px;
    background: inherit;
    color: var(--bg);
    box-shadow: 0px 5px 5px rgba(0,0,0,.4);
`