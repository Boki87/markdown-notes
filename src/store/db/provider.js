import React, { createContext, useContext, useReducer } from 'react'
import dbReducer from './reducer'
import {useFirebase} from '../../utils/firebase'
import {useAuth, useModal} from '../index'

import {
    SET_ACTIVE_CATEGORY,
    SET_ACTIVE_NOTE,
    SET_NOTES,
    SET_NOTE,
    ADD_NOTE,
    NOTES_LOADING,
    SET_CATEGORIES,
    DEL_NOTE
} from '../types'


const DBContext = createContext()

export const useDB = () => useContext(DBContext)

const DBProvider = ({children}) => {

    const initialState = {
        activeCategory:0,
        categories:[],
        activeNote:{
            id: -1,
            noteBody: '',
            category: ''
        },
        loading: false,
        notes:[]
    }
    
    const {user} = useAuth()    
    
    const {firebaseApp} = useFirebase()

    var db = firebaseApp.firestore()

    const [state, dispatch] = useReducer(dbReducer, initialState)

    const getNotes = () => {
        dispatch({type:NOTES_LOADING, payload:true})
        db.collection("notes").where("userId", '==', user.uid)
        .get()
        .then((querySnapshot) => {
            let notes = []
            let categories = []
            querySnapshot.forEach(doc => {                
                notes.push({...doc.data(), id:doc.id}) 
                if(!categories.includes(doc.data().category)) {
                    categories.push(doc.data().category)
                }               
            })
            dispatch({type:SET_NOTES, payload: notes})
            dispatch({type:SET_CATEGORIES, payload: categories})
            

        })
    }

    const setActiveCategory = (id) => {        
        dispatch({type:SET_ACTIVE_CATEGORY, payload: id})
    }
    
    const setActiveNote = (note) => {        
        dispatch({type:SET_ACTIVE_NOTE, payload: note})
    }


    const updateNote = (note) => {
                
        db.collection('notes').doc(note.id).set({
            category: note.category,
            noteBody: note.noteBody,
            timestamp: +new Date() + '',
            userId: user.uid
        })
        .then(() => {
            console.log("Document successfully written!");
            dispatch({
                type: SET_NOTE,
                payload: {
                    id: note.id,
                    category: note.category,
                    noteBody: note.noteBody,
                    timestamp: +new Date() + '',
                    userId: user.uid
                }
            })
        })
        .catch((error) => {
            
            console.error("Error writing document: ", error);
        });
    }

    const delNote = (id) => {
        db.collection('notes').doc(id).delete()
        .then(() => {
            setActiveNote({
                id: -1,
                noteBody: '',
                category: ''
            })

            dispatch({type:DEL_NOTE, payload:id})
        })
        .catch(() => {
            console.log('error deeting')
        })
    }


    const addNote = (category, cb) => {
        dispatch({type:NOTES_LOADING, payload:true})
        var newNote = {            
            category: category,
            noteBody: '##Edit Me',
            timestamp: +new Date() + '',
            userId: user.uid
        }

        db.collection('notes').add(newNote)
        .then(docRef => {

            let categories = []
            state.notes.forEach(note => {                                
                if(!categories.includes(note.category)) {
                    categories.push(note.category)
                }               
            })            

            dispatch({type:SET_CATEGORIES, payload: categories})            
            dispatch({type:ADD_NOTE, payload: {...newNote, id:docRef.id}})
            dispatch({type:NOTES_LOADING, payload:false})
            cb()
        })
        .catch(err => {
            dispatch({type:NOTES_LOADING, payload:false})
            console.log(err)
        })
    }

    return (
        <DBContext.Provider value={{
            activeCategory: state.activeCategory,
            categories: state.categories,
            activeNote: state.activeNote,
            notes: state.notes,
            loading: state.loading,
            setActiveCategory,
            setActiveNote,
            getNotes,
            updateNote,
            delNote,
            addNote
        }}>
            {children}
        </DBContext.Provider>
    )
}

export default DBProvider
