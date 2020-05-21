import React from 'react'
import styled from 'styled-components'

import Sidebar from '../components/sidebar/Sidebar'
import NotesBar from '../components/notesBar/NotesBar'
import NoteEditor from '../components/noteEditor/NoteEditor'


const Home = () => {

    
    return (
        <StyledWrapper>
            <Sidebar />

            <NotesBar />

            <NoteEditor />    
        </StyledWrapper>
    )
}

export default Home


const StyledWrapper = styled.div`

    display: flex;
    width:100%;
    height:100%;    


`



