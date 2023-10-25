//로그인

import React , {useState,useEffect} from "react"
import axios from "axios"
import "./style/Signup.css" 

function Signup(){

    const [formData, setFormData] = useState({
      account: '',
      pw: '',
      confirm_pw: '',
    });
  
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
          const response = await axios.post('http://your-backend-api-url/signup', formData);
          console.log('회원가입 성공:', response.data);
          // 추가 작업 (예: 리디렉션, 사용자 알림 등)
        } catch (error) {
          console.error('회원가입 실패:', error);
          // 오류 처리 (예: 오류 메시지 표시)
        }
      };

    return (

        <div className="Sign-body">

            <div className="Sign-chart">
                
                <h1>Sign up</h1>
                <hr style={{width : "inherit"}}/>
                <h3>회원가입을 위해 정보를 입력해주세요</h3>
                                                
                <form className="list">
                    <div>
                        <input
                        type="text"
                        name="account"
                        placeholder="사용자 이름"
                        value={formData.account}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                        type="password"
                        name="pw"
                        placeholder="비밀번호"
                        value={formData.pw}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                        type="password"
                        name="confirm_pw"
                        placeholder="비밀번호 확인"
                        value={formData.confirm_pw}
                        onChange={handleChange}
                        />
                    </div>

                    <div style={{display: "grid"}}>
                        <form><button type="submit" className="check" onSubmit={handleSubmit}>회원가입</button></form>
                    </div>
                    
                </form>     
                                
            </div>

        </div>

    )
}

export default Signup