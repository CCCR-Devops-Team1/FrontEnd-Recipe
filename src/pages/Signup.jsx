//로그인

import React , {useState} from "react"
import axios from "axios"
import "./style/Signup.css" 

function Signup(){

    


    const [createid,setCreateid] = useState([])

    const [createps,setCreateps] = useState([])

    const [cheakps,setCheakps] = useState([])

    const handleChangeid = (e) =>{
        setCreateid(e.target.value)
    }

    const handleChangeps = (e) =>{
        setCreateps(e.target.value)
    }

    const changeCheakps = (e) =>{
        setCheakps(e.target.value)
    }


    return (

        <div className="Sign-body">

            <div className="Sign-chart">
                
                <h1>Sign up</h1>
                <hr style={{width : "inherit"}}/>
                <h3>회원가입을 위해 정보를 입력해주세요</h3>
                
                <div className='list'>
                                           
                        <div>
                            <input type='text' placeholder="아이디"
                            onChange={handleChangeid}
                            ></input>
                        </div>
                        
                        <div>
                            <input type='password' placeholder="비밀번호"
                            onChange={handleChangeps}
                            ></input>
                        </div>
                       
                        <div>
                            <input type='password' placeholder="비밀번호확인"
                            onChange={changeCheakps}
                            ></input>
                        </div>

                        <div style={{display: "grid"}}><button className="check">회원가입</button></div>
                </div>

                
            </div>


        </div>

    )
}

export default Signup