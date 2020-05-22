import React from 'react'
import styled from 'styled-components'


const Modal = ({children}) => {
    return (
        <StyledBackdrop>
            <div className='modal-container'>
                {children}
            </div>
        </StyledBackdrop>
    )
}

export default Modal

const StyledBackdrop = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top:0px;
    left:0px;
    display: flex;
    background: rgba(0,0,0,.8);
    z-index: 10;
    align-items: center;
    justify-content: center;
    .modal-container {
        display: flex;
        width: 500px;
        min-height: 500px;
        background: #fff;
        border-radius: 5px;
        box-shadow: 0px 5px 5px rgba(0,0,0,.6);
    }
`