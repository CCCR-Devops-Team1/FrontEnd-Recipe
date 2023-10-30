//로그인

import React , {useState,useRef} from "react"
import axios from "axios"
import "./style/Signup.css" 
import { useNavigate } from "react-router-dom";

function Signup(){
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    account: '',
    pw: '',
    confirm_pw: '',
  });

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  const handleKeyDown = (event, ref) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (ref && ref.current) {
        ref.current.focus();
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://www.recipetips.net/user/signup', formData);
        console.log('회원가입 성공:', response.data);
        navigate('/');
        // 추가 작업 (예: 리디렉션, 사용자 알림 등)
      } catch (error) {
        alert("회원가입 실패")
        console.error(error);

        // 오류 처리 (예: 오류 메시지 표시)
      }
    };

  return (

  <div className="Sign-body">

      <div className="Sign-chart">
          
          <h1>Sign up</h1>
          <hr style={{width : "inherit"}}/>
          <h3>회원가입을 위해 정보를 입력해주세요</h3>
                                          
          <form className="list" onSubmit={handleSubmit}>
            
              <div>
                  <input
                  type="text"
                  name="account"
                  placeholder="사용할 이름"
                  value={formData.account}
                  onChange={handleChange}
                  onKeyDown={(e) => handleKeyDown(e, inputRef2)}
                  ref={inputRef1}
                  
                  />
              </div>
              <div>
                  <input
                  type="password"
                  name="pw"
                  placeholder="비밀번호"
                  value={formData.pw}
                  onChange={handleChange}
                  onKeyDown={(e) => handleKeyDown(e, inputRef3)}
                  ref={inputRef2}
                  />
              </div>
              <div>
                  <input
                  type="password"
                  name="confirm_pw"
                  placeholder="비밀번호 확인"
                  value={formData.confirm_pw}
                  onChange={handleChange}
                  onKeyDown={(e) => handleKeyDown(e, null)} // 마지막 입력란인 경우에는 다음 인풋으로 넘어가지 않도록 null 전달
                  ref={inputRef3}
                  />
              </div>
              
          </form>   
          <div style={{display: "grid"}}>
            <button onClick={handleSubmit} type="submit" className="check" >회원가입</button>
          </div>  
                          
      </div>

  </div>

  )
}

export default Signup