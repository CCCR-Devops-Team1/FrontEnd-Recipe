import "./style/Login.css" 
import React from "react"

function Login(){
    return (
        <div className='login-body'>
            <div className='login-box'>
                <h1>Food recommendation</h1>

                <div className='login-main'>

                    <h3>계정에 로그인하기 위해 세부 정보를 입력합니다.</h3>

                    <form>
                        <input type='text' className='user' placeholder='| ID'></input>
                        <input type='password' className='pass' placeholder='| PW'></input>
                    </form>
                </div>

                <div className='login-footer'>
                    <span>계정이 없으시다면 회원가입을 해주시기 바랍니다</span>
                </div>
            </div>
        </div>
    
    )
}

export default Login