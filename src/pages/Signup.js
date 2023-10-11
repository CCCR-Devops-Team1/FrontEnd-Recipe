import "./style/Signup.css" 
import React from "react"

function Signup(){
    return (

        <div className="Sign-body">

            <div className="Sign-chart">
                <h1>Sign up</h1>

                <h3>회원가입을 위해 정보를 입력해주세요</h3>
                
                <ul className='list'>
                    
                    <li>회원아이디</li>
                    <input type='text'></input>

                    <li>비밀번호</li>
                    <input type='password'></input>

                    <li>비밀번호 확인</li>
                    <input type='password'></input>

                </ul>


                <button className="check">Submit</button>
            </div>


        </div>

    )
}

export default Signup