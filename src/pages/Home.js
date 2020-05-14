import React from 'react'
import styled from 'styled-components'

import Sidebar from '../components/sidebar/Sidebar'
import NotesBar from '../components/notesBar/NotesBar'


const Home = () => {

    
    return (
        <StyledWrapper>
            <Sidebar />

            <NotesBar />

            <div>
                editor
            </div>        
        </StyledWrapper>
    )
}

export default Home


const StyledWrapper = styled.div`

    display: flex;
    width:100%;
    height:100%;    


`



