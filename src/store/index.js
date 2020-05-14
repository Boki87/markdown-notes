import React from 'react'

import AuthProvider from './auth/provider'
import ThemeProvider from './theme/provider'
import ToastsProvider from './toasts/provider'
import DBProvider from './db/provider'

import {useAuth} from './auth/provider'
import {useTheme} from './theme/provider'
import {useToasts} from './toasts/provider'
import {useDB} from './db/provider'

export {
    useAuth,
    useTheme,
    useToasts,
    useDB
}

export default ({children}) => {
    return (
        <ToastsProvider>
            <AuthProvider>            
                <ThemeProvider>
                    <DBProvider>
                        {children}
                    </DBProvider>
                </ThemeProvider>
            </AuthProvider>
        </ToastsProvider>
    )
}

