import './App.css'
/* 전환할 페이지 가져오기 */
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Recipes from "./pages/Recipes"
import Mainhome from "./pages/Mainhome"
import Write from './pages/Writepage'
import Update from './pages/Updatepage'
import Nav from './pages/Nav'
import Board from './pages/Board'
import Recipe from './pages/Recipes'
import NotFound from './pages/NotFound'
/*react*/ 
import React,{useState,useEffect} from 'react'
import {Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className="App">
      
      <Nav/>

      {/* 페이지 라우팅 해주는 코드 path import 이름  element 링크 태그 사이 값*/}
      <Routes>
        
          <Route exact path='/' element={<Mainhome/>}/> {/*게시판*/}  

          <Route path='Signup' element={<Signup/>}/> {/**회원가입 */}
          
          <Route path='Login' element={<Login/>}/>  {/*유저 로그인*/}

          <Route path='Recipe' element={<Recipe/>}/> {/** 레시피 페이지 */}
          <Route path='Recipe/id' element={<Recipe/>}/> {/** 레시피 상세 페이지 */}

          <Route path='Write' element={<Write/>}/> {/*글 쓰기 페이지*/}

          <Route path='Board/:id' element={<Board/>}/> {/*글 유저마다 상세보기*/}

          <Route path='Update' element={<Update/>}/> {/*글 유저마다 수정하기*/}



          <Route path='/*' element={<NotFound/>}/>
          
      </Routes>

    </div>
  )
}

export default App
