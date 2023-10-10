import "./Login.css" 
import React from "react"

function Login(){
    return (
        <div className='loginbody'>
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
        </div>
    
    )
}

export default Login