//로그인

import axios from "axios";
import React, { useEffect, useState,} from "react"
import { useCookies } from "react-cookie"
import "./style/Login.css"
import { useNavigate } from "react-router-dom";

const Login = () => {  

    const navigate = useNavigate();
    const [users,setUsers] = useState([]);
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookie] = useCookies(['user']);

    
    const handleUserIdChange = (e) => {
    setUserId(e.target.value);
    };
    
    const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    };
    
    useEffect (() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function(response){
            setUsers(response.data);
        })
    },[]);
   
    const match = function usermatch() {
        const user = users.find(user => user.title === userId && user.id.toString() === password);
        if(user) {
          console.log('로그인');
          setCookie('user', user, { path: '/' }); // 쿠키에 유저 정보 저장
          navigate('/');
        } else {
          console.log('실패');  
        }
      }
    
    const handlebuttonchange = (e) => {
        match();
    }

    return (
        <div className='login-body'>
            <div className='login-box'>
                <h1>Food recommendation</h1>

                <div className='login-main'>

                    <h3>계정에 로그인하기 위해 세부 정보를 입력합니다.</h3>

                    <form>
                        <input type='text' className='user' placeholder='| ID'
                        value={userId}
                        onChange={handleUserIdChange}
                        ></input>

                        <input type='password' className='pass' placeholder='| PW'
                        value={password}
                        onChange={handlePasswordChange}
                        ></input>
                    </form>
                    <ul>
                        
                        <li>
                           
                        </li>
                        
                    </ul>
                    <div>
                        <button onClick={handlebuttonchange}>로그인</button>
                    </div>
                </div>

                <div className='login-footer'>
                    <span>계정이 있다면 글을 작성할 수 있습니다.</span>
                </div>
            </div>
        </div>
    )
}

export default Login