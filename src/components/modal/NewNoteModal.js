import React from 'react'
import styled from 'styled-components'
import Modal from './Modal'

import {useModal, useDB} from '../../store'


const NewNoteModal = () => {

    const {showNewNoteModal, hideNewNoteModal} = useModal()
    const {categories} = useDB()

    return (
            <> 
                {showNewNoteModal &&        
                    <Modal backropClick={hideNewNoteModal}>
                        <StyledModal>
                            <div>
                                <h4>New Note</h4>
                            </div>
                            <div className='input-group'>
                                <span>Add note to category:</span>
                                <select name="" id="">
                                    <option value="-1" selected>Select Category</option>
                                    {categories.map(cat => <option value={cat} key={cat}>{cat}</option>)}
                                    
                                </select>
                            </div>

                            <div className='input-group'>
                                <span>Or add to new category:</span>
                                <input type="text" placeholder='Category Name'/>
                            </div>

                            <button type='submit'>Add</button>

                        </StyledModal>
                    </Modal>    
                }
            </>
        )


}

export default NewNoteModal

const StyledModal = styled.form`
    width: 500px;
    min-height: 200px;
    padding: 20px;
    
    .input-group {
        width: 100%;
        display: flex;
        span {
            font-size: 1.1rem;
            width: 200px;
        }
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