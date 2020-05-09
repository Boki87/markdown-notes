import React, {useReducer, createContext, useContext} from 'react'
import {ThemeProvider} from 'styled-components'
import GlobalStyles from '../../styles/global'
import ThemeReducer from './reducer'

import {SET_THEME} from '../types'
import {light, dark} from '../../styles/theme'

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)


const ThemeStore = ({children}) => {

    var initialState = {
        theme: light
    }

    const [state, dispatch] = useReducer(ThemeReducer, initialState)

    const setTheme = (theme = 'light') => {

        if(theme === 'light') {
            dispatch({type: SET_THEME, payload: light})
        }else{
            dispatch({type: SET_THEME, payload: dark})
        }
    }


    return (
        <ThemeContext.Provider value={{setTheme}}>
            <ThemeProvider theme={state.theme}>
                <GlobalStyles />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeStore
