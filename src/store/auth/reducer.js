import {
    LOGIN_SUCCESS,    
    LOGIN_FAIL,   
    REGISTER_FAIL, 
    LOGOUT,    
    SET_LOADING,    
    CLEAR_ERRORS    
} from '../types'


export default (state, action) => {

    switch (action.type) {
        case LOGIN_SUCCESS:
            
            return {
                ...state,
                user: action.payload,
                error: null,
                loading: false
            }

        case LOGIN_FAIL:
        case REGISTER_FAIL:
            
            return {
                ...state,
                user: null,
                error: action.payload,
                loading: false
            }

        case LOGOUT:
            
            return {
                ...state,
                user: null,
                error: null,
                loading: false
            }

        case SET_LOADING:
            
            return {
                ...state,               
                loading: action.payload
            }    

        case CLEAR_ERRORS:
            
            return {
                ...state,               
                error: null
            }
    
        default:
            return state
    }


}