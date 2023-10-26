//로그인

import axios from "axios";
import React, { useEffect, useState,} from "react"
import { useCookies } from "react-cookie"
import "./style/Login.css"
import { useNavigate,Link } from "react-router-dom";
import { setCookie,getCookie,removeCookie } from "../component/cookie";

const Login = () => {  

    const navigate = useNavigate();

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
            const response = await axios.post("/notice", logindata);

            console.log('로그인 성공:', response.data);

            const accessToken = response.data.token 
                if(accessToken){
                setCookie('Token',`${accessToken}`,{
                    path: '/',
                    secure: false,
                })};

            const userinfo = response.account
                setCookie("info",{userinfo},{
                    path: '/',
                    secure: false,
                });
                //토큰 쿠키에 저장 path 가 '/' 일 경우 모든페이지에서 쿠키에 접근할 수 있다
            // 추가 작업 (예: 로그인 상태 업데이트, 리디렉션 등)
            navigate('/');

        } catch (error) {
          console.error('로그인 실패:', error);
          // 오류 처리 (예: 오류 메시지 표시)
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
                        ></input>

                        <input 
                        type='password' 
                        className="input-user"
                        placeholder='| PW'
                        name='pw'
                        value={logindata.pw}
                        onChange={handleChange}
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