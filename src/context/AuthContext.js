'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { _DELETE } from '@/request/request'
import { _POST } from '@/request/post_request'

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const route = useRouter()

    // Load user data on app start
    useEffect(() => {
        const savedUser = localStorage.getItem('user')
        const token = Cookies.get('token')
        if (savedUser && token) {
            setUser(JSON.parse(savedUser))
        }
        setLoading(false)
    }, [])

    //   const login = async (email, password) => {
    //     try {
    //       const response = await fetch('/api/auth/login', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ email, password })
    //       })

    //       const data = await response.json()

    //       if (response.ok) {
    //         // Store token and user data
    //         localStorage.setItem('token', data.token)
    //         localStorage.setItem('user', JSON.stringify(data.user))

    //         setUser(data.user)
    //         return { success: true }
    //       }
    //       return { success: false, error: data.message }
    //     } catch (error) {
    //       return { success: false, error: 'Network error' }
    //     }
    //   }

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
        const updatedUser = { ...user, ...userData }
        setUser(updatedUser)
        localStorage.setItem('user', JSON.stringify(updatedUser))
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