//글 상세보기 

import React , {useState,useEffect } from "react";
import { Route,Router } from "react-router-dom";
import { getCookie } from "../component/cookie";
import axios from "axios";

import './style/Board.css'


const Board = () => {
    const article_id = 1;

    const [text , setText] =useState([]);
    // const searchTest = async()=>{
    //     try{
    //         const response = await axios.get(`http://www.recipetips.net/notice/${article_id}`,{   
    //         article_id : id
    //         })

    //     }catch(error){
    //         console.error(error);
    //     }
    
    // }


    useEffect(()=> {
        
        const Bulletin= async() =>{
            try{
                const response = await axios.get(`http://localhost:8082/notice/${article_id}`)   
                setText(response.data.result)
                
                console.log("게시글");
                console.log(response.data.result);
            }catch(error){
                console.error(error);

            }

        }
        Bulletin();
    },[])
    
    return(
        <div style={{display:'grid' , justifyItems:'center'}}>
            <div className="board">

                <input type="text" placeholder="글찾기"></input>
                
                <div className="board-head">
                    <h1>{text.subject}</h1>
                    <h4>{text.memberId}</h4>
                </div>

                <div className="board-body">
                    <span>{text.content}</span>
                    <img src="" alt="이미지 공간"/>
                    <p>{window.location.pathname}</p>
                </div>

                <div className="board-footer">
                    <form>
                        <textarea placeholder="댓글을 작성하려면 로그인 해주세요">
                        
                        </textarea>
                        
                    </form>

                    <button>
                        글 쓰기
                    </button>
                </div>   
        
                <div className="comment">
                    <div>
                        <span>닉네임 user1</span>
                    </div>
                    <div>
                        <span>user1 의 아무글</span>
                    </div>
                </div>
                
            </div>
        </div>  
    )
}


export default Board