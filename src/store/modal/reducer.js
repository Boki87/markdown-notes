import {
    SHOW_CONFIRM_MODAL,
    SET_CONFIRM_CALLBACK,
    SET_CONFIRM_MODAL_MSG
} from '../types'


export default (state, action) => {
    switch (action.type) {
        case SHOW_CONFIRM_MODAL:
            
            return {
                ...state,
                showConfirmModal: action.payload
            }
        case SET_CONFIRM_CALLBACK:
            return {
                ...state,
                confirmCallback: action.payload
            }
        case SET_CONFIRM_MODAL_MSG:
            return {
                ...state,
                confirmModalMsg: action.payload
            }
    
        default:
            return state
    }
}