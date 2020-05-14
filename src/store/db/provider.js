import React, { createContext, useContext, useReducer } from 'react'
import dbReducer from './reducer'

import {
    SET_ACTIVE_CATEGORY,
    SET_ACTIVE_NOTE,
    SET_NOTES,
    SET_NOTE,
    ADD_NOTE,
} from '../types'


const DBContext = createContext()

export const useDB = () => useContext(DBContext)

const DBProvider = ({children}) => {

    const initialState = {
        activeCategory:0,
        activeNote:0,
        notes:[]
    }

    const [state, dispatch] = useReducer(dbReducer, initialState)




    return (
        <DBContext.Provider value={{
            activeCategory: state.activeCategory,
            activeNote: state.activeNote,
            notes: state.notes,
        }}>
            {children}
        </DBContext.Provider>
    )
}

export default DBProvider
