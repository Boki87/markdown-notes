import React from 'react'
import styled from 'styled-components'

import {useModal} from '../../store'

const NewNoteBtn = () => {

    const {openNewNoteNodal} = useModal()

    return (
        <StyledNewNoteBtn onClick={openNewNoteNodal}>
            <i className="fas fa-plus"></i>
        </StyledNewNoteBtn>
    )
}

export default NewNoteBtn

const StyledNewNoteBtn = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg);
    color: #fff;
    font-size: 1.5rem;
    position: absolute;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
    &:hover {
        filter: brightness(90%);
    }
`