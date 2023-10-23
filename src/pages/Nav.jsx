// 네비게이션 바

import React from "react"
import "./style/Nav.css"
import { Link } from "react-router-dom"
import { useCookies } from "react-cookie";
import mainlogo from "../img/recipe-logo.png"

function Nav() {

    const [cookies, removeCookie] = useCookies(['user']);

    return (
    
    <nav className="Head">
            {/* 라우팅 할 링크 위에  Link to =import 이름 class는 아무 의미없는 글로 통일해둠
            태그 사이에 값은 display 표시할 글 */}

        <div className="logo">

            <Link to="/" className="main-logo"><img src={mainlogo} style={{height:50}}></img></Link> 

        </div>

        <div className="tap">
            <Link to="Signup" className="Sig"><span className="material-icons">person_add</span>회원가입</Link>

            <Link to="Write" className="Sig"><span className="material-icons">edit</span>게시글 작성</Link>

            <Link to="Update" className="Sig"><span className="material-icons">edit_note</span>게시글 수정</Link>

            <Link to="Recipes" className="Sig"><span className="material-icons">edit_note</span>레시피</Link>
        </div>

        <div className="info">

            <p>User ID: {cookies.user ? cookies.user.title : 'Not logged in'}</p>
            <p>로그인 여부: {cookies.user ? 'Logged in' : 'Not logged in'}</p>
            
            <Link className="login-button" to="Login">로그인</Link>
            
            {cookies.user && <button onClick={() => removeCookie('user')}>로그아웃</button>}
            
        </div>

    </nav>
    
    )
}
export default Nav;

