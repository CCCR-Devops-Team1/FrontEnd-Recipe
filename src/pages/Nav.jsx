// 네비게이션 바

import React,{useEffect, useState} from "react"
import "./style/Nav.css"
import { Link,useNavigate} from "react-router-dom"
import mainlogo from "../img/recipe-logo.png"
import { getCookie,removeCookie } from "../component/cookie";
import ModalBasic from "../component/Modal";
import Dropdown from "../component/DropDown";
import axios from "axios";
import userinfo from "../component/testapiget";

function Nav() {
    const navigate = useNavigate();

    const [nick,setNick] = useState();
    const access_token = getCookie('access_token');
    const refresh_token = getCookie('refresh_token');

    const logoutsubmit = async (e) =>{
        // try{
        //    const response = await axios.put("http://localhost:8081/user/logout",{
        //     header:{
        //         Authorization: `Bearer ${access_token}`
        //     },
        //     body:{
        //         refresh_token:refresh_token
        //     }  
        // }) 
       
            removeCookie("access_token");
            removeCookie("refresh_token");
            navigate('/');
        
        // else{
        //     console.log("로그아웃 실패 잠시 후 다시 실행");
        // }
    //     }catch(error){
    //         console.error(error);
    //     }
    //
    }


    useEffect (() => {
        const userid = async () => {
            try{
            const response = await axios.get('http://www.resipetips.net/user',{
                headers:{
                    Authorization:`Bearer ${access_token}`
                }
            })
            console.log(response.data.result.account);
            setNick(response.data.result.account);

            }catch(error){
                console.error(error);
            }
        }
        userid();
    },[])
  

    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
    // const modal = ModalBasic();
    const [view, setView] = useState(false); 

    return (
    
    <nav className="Head">
            
        <div className="logo">

            <Link to="/" className="main-logo"><img src={mainlogo} style={{height:63}}></img></Link> 

        </div>

        <div className="tap">
            {access_token == undefined ?<Link to="Signup" className="Sig"><span className="material-icons">person_add</span>회원가입</Link> : false}

            {access_token !== undefined ? <Link to={ access_token !== undefined ? 'Write' : 'Login' } className="Sig"><span className="material-icons">edit</span>게시글 작성</Link> : false}

            {access_token !== undefined? <Link to='Update' className="Sig"><span className="material-icons">edit_note</span>게시글 수정</Link> : false}

            <Link to="Recipes" className="Sig"><span className="material-icons">menu_book</span>레시피</Link>
        </div>
        
        
        <div className="info">

            <p>User ID: { access_token !== undefined ? nick : 'Not Login'}</p>
            
            {access_token==undefined ? <Link className="login-button" to="Login">로그인</Link> : false}
            
            {access_token!==undefined ? <button class="material-symbols-outlined" onClick={e => setDropdownVisibility(!dropdownVisibility)}>
            more_vert</button> : false}
           
            {access_token!==undefined ? <button type="submit" className="login-button" onClick={logoutsubmit}>로그아웃</button> : false }
            
            {/*드롭다운 버튼*/}
        
            {/** 드롭다운 내용 */}
              
            <Dropdown visibility={dropdownVisibility}>
                <ul>
                    <li><Link to="Mypage"><button>내정보</button></Link></li>
                    <li>item 3</li>
                    <li>item 4</li>
                </ul>
            </Dropdown> 
            
        </div>    

    </nav>
    )
}
export default Nav;

