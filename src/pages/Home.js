import React from 'react'
import {useAuth} from '../store'
import {useTheme} from '../store'

const Home = () => {

    const {userLogout} = useAuth()
    const {setTheme} = useTheme()

    const setThemeHandler = () => {
        setTheme('dark')
    }
    return (
        <div>
            Home

            <button onClick={userLogout}>Logout</button>
            <button onClick={setThemeHandler}>Dark Theme</button>
        </div>
    )
}

export default Home
