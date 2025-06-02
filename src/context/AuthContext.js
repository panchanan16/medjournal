'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { _DELETE } from '@/request/request'
import { _POST } from '@/request/post_request'
import { entityCore } from '@/config/api.config'

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const route = useRouter()

    // Load user data on app start
    useEffect(() => {
        async function loadUser() {
            const token = Cookies.get('token')
            const getUser = await fetch(`${entityCore}/auth/verifyToken`, { method: 'GET', headers: { authorization: `Bearer ${token}` } })
            const user = await getUser.json()
            setLoading(false)
            if (user && user.status && user.data && user.data.isActive == 1) {
                updateUser(user.data)
                return;
            } 
        }

        loadUser()

    }, [])

    const logout = async () => {
        try {
            const token = Cookies.get('token')
            const logoutResponse = await _DELETE(`auth/logout`, 'core', token)
            if (logoutResponse) {
                localStorage.removeItem('user')
                Cookies.remove('token')
                Cookies.remove('user')
                Cookies.remove('role')
                setUser(null)
                route.replace('/')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const updateUser = (userData) => {
        setUser(userData)
        localStorage.removeItem('user')
        localStorage.setItem('user', JSON.stringify(userData))
    }

    return (
        <AuthContext.Provider value={{
            user,
            logout,
            updateUser,
            loading,
            isAuthenticated: !!user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider')
    }
    return context
}