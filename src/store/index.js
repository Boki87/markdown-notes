import React from 'react'

import AuthProvider from './auth/provider'
import ThemeProvider from './theme/provider'

import {useAuth} from './auth/provider'
import {useTheme} from './theme/provider'

export {
    useAuth,
    useTheme
}

export default ({children}) => {
    return (
        <AuthProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </AuthProvider>
    )
}

