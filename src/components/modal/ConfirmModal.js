import React from 'react'
import styled from 'styled-components'
import Modal from './Modal'

import {useModal} from '../../store'


const ConfirmModal = () => {

    const {showConfirmModal, hideConfirmModal, confirmCallback, confirmModalMsg} = useModal()




    return (
            <> 
                {showConfirmModal &&        
                    <Modal bacdropClick={hideConfirmModal}>
                        <StyledModal>
                            <p>{confirmModalMsg}</p>
                            <div className='actions'>
                                <button onClick={() => confirmCallback()}>Yes</button>
                                <button onClick={() => hideConfirmModal()}>No</button>
                            </div>
                        </StyledModal>
                    </Modal>    
                }
            </>
        )


}

export default ConfirmModal

const StyledModal = styled.div`
    width: 100%;
    height: 150px;
    padding: 20px;
    p  {
        text-align: center;
    }

    .actions {
        position: absolute;
        bottom:0px;
        left: 0px;
        width:100%;
        height: 50px;
        display: flex;
        justify-content: center;
    }

    button {
        width: 70px;
        height: 35px;
        text-align:center;
        line-height: 35px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        background: #f0f0f0;
        margin-right: 10px;
        color:var(--bg);
        &:hover {
            filter: brightness(90%);
        }
    }

    
`