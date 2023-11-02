//글 상세보기 

import React , {useState,useEffect } from "react";
import { Route,Router, useParams } from "react-router-dom";
import { getCookie } from "../component/cookie";
import axios from "axios";
import ApiGet from "../component/testapiget";
import { NOTICEPROD } from "../component/url";

import './style/Board.css'


const Board = () => {
    const nick = ApiGet();

    const [text , setText] =useState([]);

    const param =useParams();

    useEffect(() => {

        const postPage = async (e) =>{
            try{

                const res = await axios.get(`${NOTICEPROD}/notice/${param.id}`)
                
                setText(res.data.result)
                console.log(param.id);
            }
            catch(err){
                console.error(err);
            }
        }
        postPage();
    },[])
    


    return(
        <div style={{display:'grid' , justifyItems:'center'}}>
            <div className="board">

                <div className="board-head">
                    <h1>{text.subject}</h1>
                    <h4>{text.memberId}</h4>
                </div>

                <div className="board-body">
                    <span>{text.content}</span>
                    <img src="" alt="이미지 공간"/>

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