import "./Home.css" 
import React from "react"
import Signup from "./Signup"
import {Routes, Route, Link} from "react-router-dom"

function Home(){
    return (
        <div className='login-box'>
            <h1>Food recommendation</h1>

            <div className='login-main'>

                <h3>enter your details to sign in to your account</h3>
                <input type='text' className='user' placeholder='| ID'></input>
                <input type='password' className='pass' placeholder='| PW'></input>

            </div>

            <div className='login-footer'>
                <span>Don't have an account?</span>

            </div>

        </div>
    )
}

export default Home