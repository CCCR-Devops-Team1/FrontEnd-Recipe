//글 상세보기 

import React , {useState,useEffect } from "react";
import { Route,Router } from "react-router-dom";
import { getCookie } from "../component/cookie";
import axios from "axios";

import './style/Board.css'


const Board = () => {

    const searchTest = async()=>{
        try{
            const response = await axios.get(`http://www.recipetips.net/notice/${article_id}`,{   
            article_id : id
            })

        }catch(error){
            console.error(error);
        }
    
    }


    useEffect(()=> {
        
        const Bulletin= async() =>{
            try{
                const response = await axios.get("/notice",{    
                })  
                console.log("게시글");

            }catch(error){
                console.error(error);

            }

        }

    })
    
    return(
        <div style={{display:'grid' , justifyItems:'center'}}>
            <div className="board">

                <input type="text" placeholder="글찾기"></input>
                
                <div className="board-head">
                    <h1>게시글 제목</h1>
                    <h4>작성자 이름</h4>
                </div>

                <div className="board-body">
                    <span>작성된 여러 글</span>
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