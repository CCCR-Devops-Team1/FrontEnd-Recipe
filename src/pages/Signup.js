import "./Home.css" 
import React from "react"
import Home from "./Home"
import {Routes, Route, Link} from "react-router-dom"

function Signup(){
    return (
        <div className='login-box'>
            <h1>회원가입 페이지</h1>

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

export default Signup