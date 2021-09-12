import React from 'react'
import auth from '../lib/auth'

export default function AppLayout(props) {  
    
    const getOut  = (e) =>{
        auth.logout(()=>{
            props.history.push('/')
        })
    }
    
    return (
        <div>
            <h1>Secret!!! Shuuu!</h1>
            <button onClick={() => getOut()}>Logout</button>
        </div>
    )
}
