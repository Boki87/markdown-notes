import {SET_TOAST, REMOVE_TOAST} from '../types'

export default (state, action) => {
    switch (action.type) {
        case SET_TOAST:            
            return [...state, action.payload]
        case REMOVE_TOAST:
            return state.filter(toast => toast.id !== action.payload)
        default:
            return state
    }
}