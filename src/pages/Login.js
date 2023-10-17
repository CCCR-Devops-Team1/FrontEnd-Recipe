//로그인

import axios from "axios";
import React, { useEffect, useState, useReducer } from "react"
import { useCookies } from "react-cookie"
import "./style/Login.css"
import { Link } from "react-router-dom";

function Login(){

    const [users,setUsers] = useState([]);
    
    
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    
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

    

    const [count ,setCount] = useState(0);

    const handlebuttonchange = (e) => {
        setCount(count+1)
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