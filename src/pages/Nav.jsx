// 네비게이션 바

import React,{useState} from "react"
import "./style/Nav.css"
import { Link,Navigate} from "react-router-dom"
import mainlogo from "../img/recipe-logo.png"
import { setCookie,getCookie,removeCookie } from "../component/cookie";
import ModalBasic from "../component/Modal";
import Dropdown from "../component/DropDown";
function Nav() {

    const logout = removeCookie('accessToken');

    const cookie = getCookie('accessToken');

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

            <p>User ID: {cookie ? cookie : 'Not Login'}</p>
            
            {cookie ? <button className="login-button" onClick={logout}>로그아웃</button> 
            
            : <Link className="login-button" to="Login">로그인</Link>}

            
                      
            {cookie ? <ul onClick={() => {setView(!view)}}>
                {/* ul 클릭하면 view 상태를 반대로반가워요, nickname 님!{" "} */}
                {view ? '⌃' : '⌄'} 
                {/* -> view가 true면 올리는 아이콘, false면 내리는 아이콘 보여줌 */}
                {view && <Dropdown />}
                {/* -> view가 true일 때만 Dropdown 컴포넌트 렌더링 */}
            </ul> : false}

        </div>

    </nav>
    
    )
}
export default Nav;

