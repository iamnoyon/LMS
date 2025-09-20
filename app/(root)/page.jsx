"use client"
import { AuthContext } from '@/context/AuthContext'
import React, { useContext } from 'react'

const page = () => {
    const { state, dispatch } = useContext(AuthContext)
    return (
        <div>
            <button onClick={() => dispatch({ type: "LOGIN" })}>Login</button>
        </div>
    )
}

export default page