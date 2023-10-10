import './App.css';
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import React from 'react';
import {Routes, Route, Link} from "react-router-dom"

/* 로그인 페이지 aass*/

function App() {
  return (
    <div className="App">

      {/* <div className='login-box'>
        <h1>Food recommendation</h1>

        <div className='login-main'>

          <h3>enter your details to sign in to your account</h3>
          <input type='text' className='user' placeholder='| ID'></input>
          <input type='password' className='pass' placeholder='| PW'></input>
        </div>

        <div className='login-footer'>
          <span>Don't have an account?</span>
          <a href='#'>Signup Now</a>
        </div>

      </div> */}
      
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
