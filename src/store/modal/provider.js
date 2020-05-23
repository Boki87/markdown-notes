import React, {createContext, useContext, useReducer} from 'react'

import {
    SHOW_CONFIRM_MODAL,
    SET_CONFIRM_MODAL_MSG,
    SET_CONFIRM_CALLBACK,

    SHOW_NEW_NOTE_MODAL
} from '../types'


import modalReducer from './reducer'

const ModalContext = createContext()

export const useModal = () => useContext(ModalContext)


const ModalProvider = ({children}) => {

    const initialState = {
        showConfirmModal: false,
        confirmModalMsg: '',
        confirmCallback: null,

        showNewNoteModal: false,


    }

    const [state, dispatch] = useReducer(modalReducer, initialState)

    const openNewNoteNodal = () => {
        dispatch({type:SHOW_NEW_NOTE_MODAL, payload:true})
    }
    const hideNewNoteModal = () => {        
        dispatch({type:SHOW_NEW_NOTE_MODAL, payload:false})
    }


    const openConfirmModal = (msg, cb) => {
        dispatch({type:SET_CONFIRM_MODAL_MSG, payload:msg })
        dispatch({type:SHOW_CONFIRM_MODAL, payload:true })
        dispatch({type:SET_CONFIRM_CALLBACK, payload:cb })
    } 
    const hideConfirmModal = () => {
        dispatch({type:SHOW_CONFIRM_MODAL, payload:false })
        dispatch({type:SET_CONFIRM_MODAL_MSG, payload:'' })
        dispatch({type:SET_CONFIRM_CALLBACK, payload:null })
    } 


    return (
        <ModalContext.Provider value={{
            showConfirmModal: state.showConfirmModal,
            confirmCallback: state.confirmCallback,
            confirmModalMsg: state.confirmModalMsg,
            openConfirmModal,
            hideConfirmModal,

            showNewNoteModal: state.showNewNoteModal,
            openNewNoteNodal,
            hideNewNoteModal
        }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider
