import React, { createContext, useContext, useReducer } from 'react'
import toastsReducer from './reducer'
import {v4 as uuidv4} from 'uuid'

import {SET_TOAST, REMOVE_TOAST} from '../types'



const ToastsContext = createContext()

export const useToasts = () => useContext(ToastsContext)

const ToastsProvider = ({children}) => {
    

    const initialState = []

    const [state, dispatch] = useReducer(toastsReducer, initialState)
    


    const setToast = (msg, type = 'info', timeout = 5000) => {

        const id = uuidv4()

        dispatch({
            type: SET_TOAST,
            payload: {msg, type, id}
        })


        setTimeout(() => {
            dispatch({
                type: REMOVE_TOAST,
                payload: id                
            })
        }, timeout)
    }


    const removeToast = (id) => {
        dispatch({
            type: REMOVE_TOAST,
            payload: id                
        })
    }

    return (
        <ToastsContext.Provider value={{
            toasts: state,
            setToast,
            removeToast
        }}>
            {children}
        </ToastsContext.Provider>
    )
}

export default ToastsProvider
