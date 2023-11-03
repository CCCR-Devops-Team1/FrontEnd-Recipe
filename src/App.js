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
import Myboard from './pages/Myboard'
// import NotFound from './pages/NotFound'
import Mypage from './pages/Mypage'
// import Updownpunk from './pages/updownpunk'
import useAxiosWithAuth from './component/axiosInterseptor'
/*react*/
import React,{useState,useEffect} from 'react'
import {BrowserRouter,Routes, Route,Outlet } from "react-router-dom"
axios.defaults.withCredentials = true;
import axios, { Axios } from 'axios'


function App() {

  const axiosInstance = useAxiosWithAuth();

  return (
    <div axiosInstance={axiosInstance} className="App">
       
      {/* 페이지 라우팅 해주는 코드 path import 이름  element 링크 태그 사이 값*/}
      <Nav/>

        <Routes>    
  
          <Route exact path='/' element={<Mainhome/>}/> {/*게시판*/}  

          <Route path='Signup' element={<Signup/>}/> {/**회원가입 */}      
          
          <Route path='Login' element={<Login/>}/>  {/*유저 로그인*/}
          
          <Route path='Recipes' element={<Recipes/>}/> {/** 레시피 페이지 */}
          
          {/** 레시피 상 <Route path='Recipes/id' element={<Recipes/>}/>세 페이지 */}

          <Route path='Write' element={<Write/>}/> {/*글 쓰기 페이지*/}

          <Route path='Board/:id' element={<Board/>}/> {/*글 유저마다 상세보기*/}
          <Route path='Myboard/:id' element={<Myboard/>}/>{/**내 정보보기 창 */}

          <Route path='Update' element={<Update/>}/> {/*유저가 작성한 글 리스트*/}

          {/* <Route path='updownpunk' element={<Updownpunk/>}/> 글 유저마다 수정하기 */}

          <Route path='Mypage' element={<Mypage/>}/> {/**개인정보 수정및 보기창 */}

          {/* <Route path='/*' element={<NotFound/>}/> */}
           
        </Routes>
        

    </div>
  )
}

export default App
