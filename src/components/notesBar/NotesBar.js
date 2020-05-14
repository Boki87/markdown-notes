import React from 'react'
import styled from 'styled-components'

const NotesBar = () => {
    return (
        <StyledNotesContainer>
                notes container
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