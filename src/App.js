import logo from './logo.svg';
import './App.css';

/* 로그인 페이지 */

function App() {
  return (
    <div className="App">
      <div className='login-box'>
        <h1>Food recommendation</h1>

        <div className='login-main'>

          <h3>enter your details to sign in to your account</h3>
          <input type='text' className='user' placeholder='| ID'></input>
          <input type='password' className='pass' placeholder='| PW'></input>
        </div>

        <div className='login-footer'>
          <span>Don’t have an account?</span>
          <a href='#'>Signup Now</a>
        </div>

      </div>
    </div>
  );
}

export default App;
