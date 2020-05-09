import React from 'react'
import styled from 'styled-components'


const InputGroup = ({onChange, type, name, value}) => {

    return (
        <StyledInput>
            <input type={type} name={name} value={value} onChange={onChange} autoComplete="off"/>
        </StyledInput> 
    )
}

export default InputGroup


const StyledInput = styled.div`

    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0px;
    input {
        width: 90%;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        font-size: 1rem;

        &:focus {
            border: 2px solid var(--main);
        }
    }

`