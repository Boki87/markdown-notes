import React, {useEffect} from 'react'
import styled from 'styled-components'
import {useAuth, useTheme, useDB} from '../../store'


const Sidebar = () => {
    const {userLogout} = useAuth()
    const {setTheme} = useTheme()
    const {activeCategory} = useDB()
    // const setThemeHandler = () => {
    //     setTheme('dark')
    // }

    useEffect(() => {
        //get all notes
    },[])

    return (
        <StyledSidebar>
                <p>{activeCategory}</p>
                <div className='categoiesContainer'>

                    <CategoryBtn>
                        Personal Notes
                    </CategoryBtn>

                </div>

                <button className='signoutBtn' onClick={userLogout}><i class="fas fa-sign-out-alt"></i></button>                
            </StyledSidebar>
    )
}

export default Sidebar

const CategoryBtn = styled.div`

    width: 100%;
    height: 30px;
    font-size: 1.2rem;
    margin-left:10px;
    border-left: 3px solid #fff;
    display:flex;
    align-items:center;
    padding-left:20px;    
    font-weight: bold;
    cursor: pointer;
`


const StyledSidebar = styled.div`
    height:100%;
    width:250px;
    background: var(--bg);
    color: var(--text-color);


    .signoutBtn {
        width: 100px;
        height:40px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 10px;
        left: calc(125px - 50px);
        cursor: pointer;
        border: 5px;
        background: var(--text-color);
        color: var(--bg);
        font-size: 1.5rem;
        i {
            transform: scaleX(-1);
        }
        &:hover {
            filter: brightness(90%);
        }
    }

    .categoiesContainer {
        width:100%;
        height:100%;
        padding-bottom:50px;
        padding-top:30px;
        overflow: auto;
    }
`
