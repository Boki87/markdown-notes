import React, {useState} from 'react'
import styled from 'styled-components'
import Switch from 'react-toggle-switch'

const EditorHeader = ({showPreview, setShowPreview, delNote}) => {

    

    return (
        <StyledHeader>   
            
                <span>Preview</span>         
                <Switch onClick={() => {setShowPreview(() => {return !showPreview})}} on={showPreview}/>
            

                <i onClick={delNote} className="fas fa-trash-alt"></i>
        </StyledHeader>
    )
}

export default EditorHeader


const StyledHeader = styled.div`
    width:100%;
    height:40px;
    background: var(--body-bg);
    color: var(--bg);
    border-bottom: 1px solid var(--bg);
    display: flex;
    align-items: center;
    
    padding-left: 20px;


        span {
            margin-right:10px;
        }




    i {
        margin-right: 20px;
        margin-left: auto;
        padding: 10px;
        cursor: pointer;
        font-size: 1.3rem;
    }
`