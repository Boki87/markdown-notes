import React from 'react'
import styled from 'styled-components'


const CategoryBtn = ({title,activeCategory, id, setActiveCategory}) => {


    return (
        <StyledBtn onClick={() => {setActiveCategory(id)}} activeCategory={activeCategory} id={id}>
            {title}
        </StyledBtn>
    )
}

export default CategoryBtn

const StyledBtn = styled.div`

    width: 100%;
    height: 30px;
    font-size: 1.2rem;
    margin-left:10px;
    margin-bottom: 10px;
    border-left: ${({activeCategory, id}) => activeCategory == id ? '3px solid #fff' : '3px solid var(--bg)'};
    display:flex;
    align-items:center;
    padding-left:20px;    
    font-weight: bold;
    cursor: pointer;

    &:hover{
        filter: brightness(90%);
    }
`