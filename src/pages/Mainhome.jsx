//메인홈 (게시판)
import React,{useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style/Mainhome.css";


function Mainhome () {
    const [popular, setPopular] = useState([]);
    const [boardList,setBoardList] = useState ([]);

    useEffect(() =>{
        axios({
            method:'GET',
            url: 'https://jsonplaceholder.typicode.com/posts'
        }).then(response => setBoardList(response.data))
    })

    useEffect(()=>{
        getPopular();
      },[])

    const getPopular = async()=>{
        // popular가 localstorage에 저장되어있는지 확인한다.
        const check = localStorage.getItem('popular');
    
        if(check){
          // 저장되어있다면, fetching할 필요 없이 배열로 반환받는다.
          setPopular(JSON.parse(check));
        }else{
          // 아무것도 없다면 fetching한다.
          const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=179ea282a75149deb0d7f25e0e0211ef`);
          const data = await api.json();
    
          localStorage.setItem('popular', JSON.stringify(data.recipes))
          setPopular(data.recipes);
          console.log(data.recipes);
        }
      } 
       
    return(
        <div className="home-body">

            <div className="home-box">
                
                    <tr className="common-list">
                    사람들이 작성한 글
                    <ur>
                  
                        {boardList.map((board) => (
                        <li style={{listStyle: 'none' , padding_top:'95px'} } key={board.id}>
                            <Link style={{display: 'block'}} className="userlink" to={`/Board/:${board.id}`}>{board.title}</Link>
                            <hr/>
                        </li> 
                        ))}
                
                    </ur>
                                                                    
                </tr>

                <hr/>

                <div>

                </div>  

            </div>
           
        </div>
    )
}

export default Mainhome