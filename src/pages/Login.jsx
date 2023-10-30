//로그인
import axios from "axios";
import React, { useEffect, useState,useRef} from "react"
import "./style/Login.css"
import { useNavigate,Link } from "react-router-dom";
import { setCookie,getCookie,removeCookie} from "../component/cookie";

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

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post("http://www.recipetips.net/user/login", logindata);
            if(response.status===200){
            let accessToken = response.headers['authorization']
            let refreshToken = response.headers['refresh']
            console.log('accessToken',accessToken);
            console.log('refreshToken',refreshToken);
            setCookie('accessToken',accessToken);
            setCookie('refreshToken',refreshToken);
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

            console.log('로그인 성공:', response.data);
        }
            navigate('/');

        } catch (error) {
          console.error('로그인 실패:', error);
          
        }
      };
    
    return (
        <div className='login-body'>

            <div className='login-box'>
                <h1>Recipe</h1>

                <div className='login-main'>

                    <h3>계정에 로그인하기 위해 세부 정보를 입력합니다.</h3>

                    <form>
                        
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
                   
                    <form><button type="submit" className="login-submit" onChange={handleSubmit}>로그인</button></form>

                </div>

                <div className='login-footer'>
                   
                    <span>계정이 있다면 글을 작성할 수 있습니다.</span>
                </div>
            </div>
        </div>
    )
}

export default Login