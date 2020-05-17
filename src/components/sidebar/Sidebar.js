import React, {useEffect} from 'react'
import styled from 'styled-components'
import {useAuth, useTheme, useDB} from '../../store'

import CategoryBtn from './CategoryBtn'

const Sidebar = () => {
    const {userLogout, user} = useAuth()
    const {setTheme} = useTheme()
    const {activeCategory,getNotes, categories, setActiveCategory, loading} = useDB()
    // const setThemeHandler = () => {
    //     setTheme('dark')
    // }

    useEffect(() => {
        //get all notes
        getNotes()            
        
    },[user])



    return (
        <StyledSidebar>
                
                <div className='categoiesContainer'>   
                 
                                {!loading ? categories.map((category, i) => <CategoryBtn title={category} activeCategory={activeCategory} id={i} key={i} setActiveCategory={setActiveCategory}/>) : <span style={{color:'#fff'}}>Loading...</span>}                      

                </div>

                <button className='signoutBtn' onClick={userLogout}><i className="fas fa-sign-out-alt"></i></button>                
            </StyledSidebar>
    )
}

export default Sidebar


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
