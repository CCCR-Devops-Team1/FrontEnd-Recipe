//로그인
import axios from "axios";
import React, { useEffect, useState,useRef} from "react"
import "./style/Login.css"
import { useNavigate,Link } from "react-router-dom";
import { setCookie,getCookie,removeCookie} from "../component/cookie";
import { MEMBERLOCAL, MEMBERPROD } from "../component/url";

const Login = () => {  

    const navigate = useNavigate();
    
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);

    const handleKeyDown = (event, ref) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          if (ref && ref.current) {
            ref.current.focus();
          }
        }
      };

    const [logindata,setLogindata] = useState({
        account: '',
        pw: ''
    });

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setLogindata({
            ...logindata,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
    
        try {
            const response = await axios.post(`${MEMBERLOCAL}/user/login`,logindata);
            if(response.data.code===200){

            setCookie("access_token",response.data.result.access_token,{
            path:'/',
            secure:false,
            maxAge:3000
            });

            setCookie("refresh_token",response.data.result.refresh_token,{
            path:'/',
            secure:false,
            maxAge:5000
            });

            console.log('로그인 성공:', response.data);
            navigate('/');
        }

        else{
            console.log({logindata});
            console.log("로그인 실패");
        }
            
        } catch (error) {
          console.error(error);
          alert("로그인 실패");
          console.log('로그인 실패');
        }
      };
    
    return (
        <div className='login-body'>

            <div className='login-box'>
                <h1>Recipe</h1>

                <div className='login-main'>

                    <h3>계정에 로그인하기 위해 세부 정보를 입력합니다.</h3>

                    <form method="POST" id="login">
                        
                        <input
                        type='text'
                        className="input-user" 
                        placeholder='| ID'
                        name="account"
                        value={logindata.account}
                        onChange={handleChange}
                        onKeyDown={(e) => handleKeyDown(e, inputRef1)}
                        ref={inputRef2}
                        ></input>

                        <input 
                        type='password' 
                        className="input-user"
                        placeholder='| PW'
                        name='pw'
                        value={logindata.pw}
                        onChange={handleChange}
                        onKeyDown={(e) => handleKeyDown(e, null)}
                        ref={inputRef1}
                        ></input>
                        
                    </form>
                   
                    <input form="login" type="button" className="login-submit" onClick={handleSubmit} value='로그인'/>

                </div>

                <div className='login-footer'>
                    <span>계정이 있다면 글을 작성할 수 있습니다.</span>
                </div>
            </div>
        </div>
    )
}

export default Login