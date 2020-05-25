import React, {useState} from 'react'
import styled from 'styled-components'
import Modal from './Modal'

import {useModal, useDB} from '../../store'


const NewNoteModal = () => {

    const {showNewNoteModal, hideNewNoteModal} = useModal()
    const {categories, addNote} = useDB()

    const [category, setCategory] = useState('') 

    const submitHandler = (e) => {
        e.preventDefault()

        if(category !== '') {
            addNote(category)
        }
    }


    const changeHandler = (e) => {
        setCategory(e.target.value)
    }

    return (
            <> 
                {showNewNoteModal &&        
                    <Modal backropClick={hideNewNoteModal}>
                        <StyledModal onSubmit={submitHandler}>
                            <div className='title'>
                                <span>New Note</span>
                            </div>
                            <div className='input-group'>
                                <span>Add note to category:</span>
                                <select onChange={changeHandler}>
                                    <option value="-1" selected>Select Category</option>
                                    {categories.map(cat => <option value={cat} key={cat}>{cat}</option>)}
                                    
                                </select>
                            </div>

                            <div className='input-group'>
                                <span>Or add to new category:</span>
                                <input onChange={changeHandler} type="text" placeholder='Category Name'/>
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
    
    .title {
        font-size: 1.3rem;
        text-align: center;
        margin-bottom: 30px;
    }

    .input-group {
        width: 100%;
        display: flex;
        span {
            font-size: 1.1rem;
            width: 200px;
        }
        margin: 10px 0px;
        height: 50px;
        align-items: center;
    }

    select {
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;

        display: block;
        font-size: 16px;
        font-family: sans-serif;
        font-weight: 700;
        color: #444;
        line-height: 1.3;
        padding: .6em 1.4em .5em .8em;
        min-width: 250px;
        max-width: 100%; /* useful when width is set to anything other than 100% */
        box-sizing: border-box;
        margin: 0;
        border: 1px solid #aaa;
        box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
        border-radius: .5em;
        background-color: #fff;
        background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
      linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
        background-repeat: no-repeat, repeat;
        /* arrow icon position (1em from the right, 50% vertical) , then gradient position*/
        background-position: right .7em top 50%, 0 0;
        /* icon size, then gradient */
        background-size: .65em auto, 100%;
        &:hover {
            border-color: #888;
        }
        &:focus {
            border-color: #aaa;
            /* It'd be nice to use -webkit-focus-ring-color here but it doesn't work on box-shadow */
            box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
            box-shadow: 0 0 0 3px -moz-mac-focusring;
            color: #222; 
            outline: none;
        }
        option {
            font-weight:normal;
        }

        &:disabled {
            color: graytext;
            background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22graytext%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
            linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
        }
        &:disabled:hover {
            border-color: #aaa;
        }
    }


    input {
        min-width: 250px;
        border: none;
        background: #f8f8f8;
        color:var(--bg);
        font-size: 1.1rem;
        border-radius: 5px;
        height: 40px;
        padding: 20px;

        &:focus {
            background: #f0f0f0;        
            border: 1px solid #ccc;
        }
    }


    button {
        font-size: 1.2rem;
        width: 80px;
        height: 40px;
        text-align:center;
        line-height: 40px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        background: #f0f0f0;        
        color:var(--bg);
        &:hover {
            filter: brightness(90%);
        }
        margin: 30px auto;
        display: block;
    }

    
`