import React from 'react'
import styled from 'styled-components'

const SearchBar = ({setFilterQuery}) => {
    return (
        <StyledSearc>
            <div className='searchWrapper'>
                <i className="fas fa-search"></i>
                <input onChange={(e) => {setFilterQuery(e.target.value)}} type="search" placeholder='Search Notes'/>
            </div>
        </StyledSearc>
    )
}

export default SearchBar

const StyledSearc = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;

    .searchWrapper {
        width: 100%;
        height: 45px;
        padding: 0px 20px;
        position: relative;
        input {
            width: 100%;
            height: 45px;
            padding: 0px 20px 0px 30px;
            border: none;
            border-bottom: 1px solid var(--bg);
            background: inherit;
            color: var(--bg);
            font-size: 1.1rem;
            font-weight: bold;
        }

        i {
            position: absolute;
            left: 20px;
            bottom: 15px;
            font-size: 1.2rem;
        }
    }
`