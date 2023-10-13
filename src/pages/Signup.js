import "./style/Signup.css" 
import React from "react"

function Signup(){
    return (

        <div className="Sign-body">

            <div className="Sign-chart">
                
                <h1>Sign up</h1>
                <hr style={{width : "inherit"}}/>
                <h3>회원가입을 위해 정보를 입력해주세요</h3>
                
                <div className='list'>
                    
                        
                        <div><input type='text' placeholder="아이디"></input></div>

                        
                        <div><input type='password' placeholder="비밀번호"></input></div>

                       
                        <div><input type='password' placeholder="비밀번호확인"></input> </div>


                        <div style={{display: "grid"}}><button className="check">회원가입</button></div>
                </div>

                
            </div>


        </div>

    )
}

export default Signup