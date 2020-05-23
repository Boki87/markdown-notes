import React from 'react'
import styled from 'styled-components'
import {Animated} from 'react-animated-css'


const Modal = ({children, backropClick}) => {

    const blocker = e => {
        e.stopPropagation()
    }


    return (
        
            <StyledBackdrop onClick={backropClick}>
                <Animated animationIn='slideInDown' animationOut='slideOutUp' animationInDuration={200} isVisible={true}>
                    <div className='modal-container' onClick={blocker}>
                        {children}
                    </div>
                </Animated>
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
    background: rgba(0,0,0,.6);
    z-index: 10;    
    justify-content: center;
    .modal-container {
        display: flex;
        min-width: 400px;
        min-height: 100px;
        background: #fff;
        border-radius: 5px;
        box-shadow: 0px 5px 5px rgba(0,0,0,.8);
        margin-top: 50px;
        position: relative;
    }
`