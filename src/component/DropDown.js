import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Dropdown() {

  const navigate = useNavigate();

  const [logout,setLogout] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.put("url",{
      
    })
    
  };

  return (
    <>
      <button onClick={() => navigate('Mypage')}>내정보</button>
      <li>로그아웃</li>
    </>
  );
}

  export default Dropdown;