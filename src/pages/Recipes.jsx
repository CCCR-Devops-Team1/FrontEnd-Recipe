import React, { useState } from "react";
import axios from "axios";
import SimpleSlider from "../component/carousel";
import ApiGet from "../component/testapiget";
import './style/Recipes.css'

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
      const response = await axios.get(`http://www.recipetips.net/member:8081/recommand${id}`,{id});
      
      console.log(response.data);

      setMenu(response.code) 

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
                value={keyword}
                type="text"
                placeholder="레시피 찾기"
                onChange={onChange} />
            <button className="recipe-searchbutton" type="submit">찾기</button>
            
        </div>
      </form>

      <div className="carrol">
        {}
      </div>
     
    </div>
  )
}

export default Recipes
