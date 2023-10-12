import './App.css';
/* 전환할 페이지 가져오기 */
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Failover from "./pages/failover"
import Mainhome from "./pages/Mainhome"
import Write from './pages/Writepage';
import Update from './pages/Updatepage';
import Nav from './pages/Nav'
import Study from './pages/aixos-component';
import React,{useState,useEffect} from 'react';
import {Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Nav/>

      
      {/* 페이지 라우팅 해주는 코드 path import 이름  element 링크 태그 사이 값*/}

             
      <Routes>  
        <Route path='study' element={<Study/>}/>
        <Route path='Signup' element={<Signup/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='Failover' element={<Failover/>}/>
        <Route exact path='/' element={<Mainhome/>}/>
        <Route path='Write' element={<Write/>}/>
        <Route path='Update' element={<Update/>}/>
      </Routes>

    </div>
  )
}

export default App
