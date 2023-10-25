import { useNavigate } from "react-router-dom";

function Dropdown() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate('Mypage')}>내정보</button>
      <li>로그아웃</li>
    </>
  );
}

  export default Dropdown;