import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SimpleSlider from "../component/carousel";
import ApiGet from "../component/testapiget";
import './style/Recipes.css'
import { MEMBERLOCAL } from "../component/url";


const Recipes = () => {
  const [keyword, setKeyword] = useState('');

  const [menu,setMenu] = useState([]);
  const nick = (1);
  const [id ,setId] = useState(nick);

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8083/recommand?keyword=${keyword}`,keyword);
      
      console.log(response.data);
      console.log(keyword);
      setMenu(response.data.result);
      
    } catch (error) {
      console.error('레시피 검색 실패:', error);
    }
  }

  const slide = SimpleSlider();

  return (
    <div className="recipe-body">
      <form onSubmit={handleSubmit}>
        <div className="recipe-search">
            
            <input className="recipe-searchWrite"
                name="keyword"
                type="text"
                placeholder="영어로 음식 찾기"
                onChange={onChange} />
            <button className="recipe-searchbutton" type="submit">찾기</button>
           
        </div>
      </form>

      <div style={{border:"1px solid black"}} className="carrol">
         {
          menu.map((food) => (
            <ul>
              
                <li style={{
                  marginBottom: '10px',
                  border: '1px solid #998'
                }}>           
                <Link style={{
                  color: 'black'
                }} to={`Foodtest/${food.id}`}>      
                  <img src={food.image}/>
                  <p style={{textAlign:'center',padding:'5px'}}>{food.title}</p>
                </Link>
                </li>
              
            </ul>
          ))
         }
      </div>
     
    </div>
  )
}

export default Recipes
