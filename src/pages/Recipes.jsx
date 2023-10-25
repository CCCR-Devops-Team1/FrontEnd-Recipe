import React,{useEffect, useState} from "react";
import axios from "axios";
import SimpleSlider from "../component/carousel";
import './style/Recipes.css'

const Recipes = ()=> {

    const [searchWrite , setSearchWrite] = useState([]);

    const onChange = (e) =>{
        const {name,value} = e.target;
        setSearchWrite({
            ...searchWrite,
            [name]:value,
        });
    };
    
    const slide = SimpleSlider();

    return(
        <div className="recipe-body">
            <form>
                <div className="recipe-search">
                    <input className="recipe-searchWrite"
                     name="searchWrite" 
                     value={searchWrite.value} 
                     type="text" 
                     placeholder="레시피 찾기"
                     onChange={onChange}/>
                    <button className="recipe-searchbutton" type="submit">찾기</button>
                </div>
            </form>

            <div>
                
            </div>
            
                {slide}

            <div>
                
            </div>
        </div>
    )
}
export default Recipes