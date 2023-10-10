import './App.css';
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import React from 'react';
import {Routes, Route, Link} from "react-router-dom"

/* 로그인 페이지 aass*/

function App() {
  return (
    <div className="App">

      <nav>
        <Link to="Signup" className="Sig">Signup Now</Link>
        <p></p>
        <Link to="Home" className="Sig">Home</Link>      
      </nav> 


      <Routes>
        <Route path='Signup' element={<Signup/>}/>
        <Route path='Home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
