import React from 'react'

import AuthProvider from './auth/provider'
import ThemeProvider from './theme/provider'
import ToastsProvider from './toasts/provider'

import {useAuth} from './auth/provider'
import {useTheme} from './theme/provider'
import {useToasts} from './toasts/provider'

export {
    useAuth,
    useTheme,
    useToasts
}

export default ({children}) => {
    return (
        <ToastsProvider>
            <AuthProvider>            
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </AuthProvider>
        </ToastsProvider>
    )
}

