import "./slick.css";
import "./slick-theme.css"; 
import React from "react";
import Slider from "react-slick";
import ApiGet from "./testapiget";
import { useState,useEffect } from "react";
import axios from "axios";

const SimpleSlider = () => {

    const data = ApiGet();
    
    const [event, setEvent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
          setEvent(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

    const settings = {
      dots: false,
      infinite: true,
      centerMode: false,
      draggable:true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      
    };
    
    return (
      <>
      <Slider {...settings}>

      {
        event.map(recipes => (
          <div>
            {/* <img src={recipes.thumbnailUrl}/> */}
            <h2>{recipes.title}</h2>
          </div> 
          
        ))}    
        
      </Slider>
  
        
      </>
    );
  }
export default SimpleSlider;