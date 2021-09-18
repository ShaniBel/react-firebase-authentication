import React from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function AppLayout(props) {  
    const {logout} = useAuth()

    const getOut  = (e) =>{
        try {
            logout()
            props.history.push('/')
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div>
            <h1>Secret!!! Shuuu!</h1>
            <button onClick={getOut}>Logout</button>
        </div>
    )
}
