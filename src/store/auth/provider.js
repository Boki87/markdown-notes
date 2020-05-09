import React, {createContext, useReducer, useEffect, useContext} from 'react'
import authReducer from './reducer'

import {useFirebase} from '../../utils/firebase'

import {
    LOGIN_SUCCESS,    
    LOGIN_FAIL,    
    LOGOUT,    
    SET_LOADING,    
    CLEAR_ERRORS    
} from '../types'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({children}) => {

    const initialState = {
        user: null,
        error: null,
        loading: true
    }

    const {firebaseApp} = useFirebase()

    const [state, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        firebaseApp.auth().onAuthStateChanged(function(user) {
            if(user) {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: user
                })
            }else{
              dispatch({
                  type: LOGOUT
              })
            }
        })
    }, [])



    const userLogin = (email, password) => {
        firebaseApp.auth().signInWithEmailAndPassword(email,password)
        .then(res => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
            dispatch({
                type: LOGIN_FAIL,
                payload: 'Wrong email or password'
            })
          })
    }

    const userLogout = () => {
        firebaseApp.auth().signOut().then(function() {
            // Sign-out successful.

          }).catch(function(error) {
            // An error happened.
          });
    }

    const setLoading = (val) => {
        dispatch({type: SET_LOADING, payload: val})
    }

    return (
        <AuthContext.Provider value={{
            user: state.user,
            error: state.error,
            loading: state.loading,
            userLogin,
            userLogout,
            setLoading
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
