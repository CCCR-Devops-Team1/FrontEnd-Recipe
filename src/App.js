import './App.css';
/* 전환할 페이지 가져오기 */
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Failover from "./pages/failover"
import Mainhome from "./pages/Mainhome"
import Write from './pages/Writepage';
import Update from './pages/Updatepage';
import React from 'react';
import {Routes, Route, Link} from "react-router-dom"


function App() {
  return (
    <div className="App">

      <nav className="Head">
      {/* 라우팅 할 링크 위에  Link to =import 이름 class는 아무 의미없는 글로 통일해둠
      태그 사이에 값은 display 표시할 글 */}
      <Link to="Signup" className="Sig"><span className="material-icons">person_add</span>회원가입</Link>

      <Link to="Login" className="Sig"><span className="material-icons">login</span>로그인</Link>      

      <Link to="Failover" className="Sig">404 페이지</Link> {/** 사라질 탭 */}

      <Link to="Mainhome" className="Sig"><span className="material-icons">other_houses</span>메인화면</Link> 

      <Link to="Write" className="Sig"><span className="material-icons">edit</span>게시글 작성</Link>

      <Link to="Update" className="Sig"><span className="material-icons">edit_note</span>게시글 수정</Link>

      </nav>

      {/* 페이지 라우팅 해주는 코드 path import 이름  element 링크 태그 사이 값*/}
      <Routes>
        <Route path='Signup' element={<Signup/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='Failover' element={<Failover/>}/>
        <Route path='Mainhome' element={<Mainhome/>}/>
        <Route path='Write' element={<Write/>}/>
        <Route path='Update' element={<Update/>}/>
      </Routes>

    </div>
  )
}

export default App
