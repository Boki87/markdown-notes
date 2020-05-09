import {SET_THEME} from '../types'

export default (state, action) => {
    switch (action.type) {
        case SET_THEME:
            return {
                ...state,
                theme: action.payload
            }
            break;
    
        default:
            return state
    }
}