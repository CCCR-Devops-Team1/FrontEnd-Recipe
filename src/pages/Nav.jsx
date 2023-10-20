// 네비게이션 바

import React from "react"
import "./style/Nav.css"
import { Link } from "react-router-dom"
import { useCookies } from "react-cookie";

function Nav() {

    const [cookies, removeCookie] = useCookies(['user']);

    return (
    
    <nav className="Head">
            {/* 라우팅 할 링크 위에  Link to =import 이름 class는 아무 의미없는 글로 통일해둠
            태그 사이에 값은 display 표시할 글 */}


        <div className="logo">

            <div></div>
            <Link to="/" className="main-logo"><span className="material-icons">other_houses</span>메인화면(로고)</Link> 
        </div>

        <div className="tap">
            <Link to="Signup" className="Sig"><span className="material-icons">person_add</span>회원가입</Link>

            <Link to="Write" className="Sig"><span className="material-icons">edit</span>게시글 작성</Link>

            <Link to="Update" className="Sig"><span className="material-icons">edit_note</span>게시글 수정</Link>
        </div>

        <div className="info">
            <p>User ID: {cookies.user ? cookies.user.title : 'Not logged in'}</p>
            <p>로그인 여부: {cookies.user ? 'Logged in' : 'Not logged in'}</p>
            <div>
            <Link to="Login"><span className="material-icons">login</span>로그인</Link>
            </div>
            {cookies.user && <button onClick={() => removeCookie('user')}>로그아웃</button>}
        </div>

    </nav>
    
    )
}
export default Nav;

