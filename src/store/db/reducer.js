import {
    SET_ACTIVE_CATEGORY,
    SET_ACTIVE_NOTE,
    SET_NOTES,
    SET_NOTE,
    ADD_NOTE,
    NOTES_LOADING,
    SET_CATEGORIES
} from '../types'

export default (state, action) => {
    switch (action.type) {
        case SET_ACTIVE_CATEGORY:
            return {
                ...state,
                activeCategory: action.payload
            }
        case SET_ACTIVE_NOTE:
            return {
                ...state,
                activeNote: action.payload
            }
        case SET_NOTES:
            return {
                ...state,
                notes: action.payload,
                loading: false
            }
        case SET_NOTE:
            return {
                ...state,
                notes: state.notes.map(note => {if(note.id === action.payload.id){
                        return action.payload
                    }
                })
            }
        case ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, action.payload],
                loading: false
            }
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case NOTES_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}