// 네비게이션 바

import React from "react"
import "./style/Nav.css"
import { Link,Navigate } from "react-router-dom"
import mainlogo from "../img/recipe-logo.png"
import { setCookie,getCookie,removeCookie } from "../cookie";

function Nav() {

    const logout = removeCookie('accessToken');

    const cookie = getCookie('accessToken');

    const navigate = Navigate('/Login')

    return (
    
    <nav className="Head">
            {/* 라우팅 할 링크 위에  Link to =import 이름 class는 아무 의미없는 글로 통일해둠
            태그 사이에 값은 display 표시할 글 */}

        <div className="logo">

            <Link to="/" className="main-logo"><img src={mainlogo} style={{height:63}}></img></Link> 

        </div>

        <div className="tap">
            <Link to="Signup" className="Sig"><span className="material-icons">person_add</span>회원가입</Link>

            <Link to={cookie ? 'Write' : 'Login' } className="Sig"><span className="material-icons">edit</span>게시글 작성</Link> 

            <Link to={cookie ? 'Update' : 'Login'} className="Sig"><span className="material-icons">edit_note</span>게시글 수정</Link>

            <Link to="Recipes" className="Sig"><span className="material-icons">menu_book</span>레시피</Link>
        </div>

        <div className="info">

            <p>User ID: {cookie ? cookie : 'Not Login'}</p>
            
            {cookie ? <button onClick={logout}>로그아웃</button> : <Link className="login-button" to="Login">로그인</Link>}

        </div>
        
        
    </nav>
    
    )
}
export default Nav;

