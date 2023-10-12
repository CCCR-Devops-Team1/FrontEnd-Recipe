import React from "react"
import "./style/Nav.css"
import { Link } from "react-router-dom"


function Nav() {
    return (
    
    <nav className="Head">
            {/* 라우팅 할 링크 위에  Link to =import 이름 class는 아무 의미없는 글로 통일해둠
            태그 사이에 값은 display 표시할 글 */}
        <Link to="Signup" className="Sig"><span className="material-icons">person_add</span>회원가입</Link>

        <Link to="Login" className="Sig"><span className="material-icons">login</span>로그인</Link>      

        <Link to="/" className="Sig"><span className="material-icons">other_houses</span>메인화면</Link> 

        <Link to="Write" className="Sig"><span className="material-icons">edit</span>게시글 작성</Link>

        <Link to="Update" className="Sig"><span className="material-icons">edit_note</span>게시글 수정</Link>

    </nav>
    
    )
}
export default Nav;

