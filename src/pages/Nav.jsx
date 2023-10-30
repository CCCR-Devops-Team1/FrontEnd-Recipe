// 네비게이션 바

import React,{useState} from "react"
import "./style/Nav.css"
import { Link,Navigate} from "react-router-dom"
import mainlogo from "../img/recipe-logo.png"
import { getCookie,removeCookie } from "../component/cookie";
import ModalBasic from "../component/Modal";
import Dropdown from "../component/DropDown";
import axios from "axios";
import ApiGet from "../component/testapiget";
function Nav() {
    
    const accessToken = getCookie('accessToken');
    const refreshToken = getCookie('refreshToken');
    
    const logoutsubmit = async (e) =>{
        try{
           const response = await axios.put("/user/logout",{
            headers:{
                Authorization: `Bearer ${accessToken},${refreshToken}`        
            }
        }) 
        removeCookie("accessToken")
        removeCookie("refreshToken")
        }
        catch(error){
            console.error(error);
        }
    }

    const cookie = getCookie('Token');
    const nickname = getCookie('info');

    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

    const modal = ModalBasic();
   
    const [view, setView] = useState(false); 

    return (
    
    <nav className="Head">
            {/* 라우팅 할 링크 위에  Link to =import 이름 class는 아무 의미없는 글로 통일해둠
            태그 사이에 값은 display 표시할 글 */}
        <div className="logo">

            <Link to="/" className="main-logo"><img src={mainlogo} style={{height:63}}></img></Link> 

        </div>

        <div className="tap">
            <Link to="Signup" className="Sig"><span className="material-icons">person_add</span>회원가입</Link>

            {cookie ? <Link to={cookie ? 'Write' : 'Login' } className="Sig"><span className="material-icons">edit</span>게시글 작성</Link> :false}

            {cookie ? <Link to='Update' className="Sig"><span className="material-icons">edit_note</span>게시글 수정</Link> : false}

            <Link to="Recipes" className="Sig"><span className="material-icons">menu_book</span>레시피</Link>
        </div>
        

        <div className="info">

            <p>User ID: {cookie ? nickname : 'Not Login'}</p>
            
            
            <Link className="login-button" to="Login">로그인</Link> 

           {cookie ? <button type="submit" className="login-button" onClick={logoutsubmit}>로그아웃</button> : false }
            
            {/*드롭다운 버튼*/}

            {cookie ? <button class="material-symbols-outlined" onClick={e => setDropdownVisibility(!dropdownVisibility)}>
            more_vert
            
            </button> : false}
        
            {/** 드롭다운 내용 */}
              
            <Dropdown visibility={dropdownVisibility}>
                <ul>
                    <li>
                        <button onClick={logoutsubmit}  onclick="toggleActivetoggleActive(this)">로그아웃</button>
                    </li>
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

