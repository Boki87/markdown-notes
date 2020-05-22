import React from 'react'

import AuthProvider from './auth/provider'
import ThemeProvider from './theme/provider'
import ToastsProvider from './toasts/provider'
import DBProvider from './db/provider'
import ModalProvider from './modal/provider'

import {useAuth} from './auth/provider'
import {useTheme} from './theme/provider'
import {useToasts} from './toasts/provider'
import {useDB} from './db/provider'
import {useModal} from './modal/provider'

export {
    useAuth,
    useTheme,
    useToasts,
    useDB,
    useModal
}

export default ({children}) => {
    return (
        <ToastsProvider>
            <AuthProvider>            
                <ThemeProvider>
                    <DBProvider>
                        <ModalProvider>
                            {children}
                        </ModalProvider>
                    </DBProvider>
                </ThemeProvider>
            </AuthProvider>
        </ToastsProvider>
    )
}

