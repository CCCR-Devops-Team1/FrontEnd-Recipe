//글 상세보기 

import React , {useState,useEffect } from "react";
import { Route,Router, useParams } from "react-router-dom";
import { getCookie } from "../component/cookie";
import axios from "axios";
import ApiGet from "../component/testapiget";
import { NOTICELOCAL, NOTICEPROD } from "../component/url";

import './style/Board.css'


const Board = () => {

    const [text , setText] =useState([]);

    const access_token = getCookie('access_token')
    const param =useParams();
    const [content ,setContent] = useState ([]);

    const onChangecontent = () =>{
        setContent(content)
    }
    

    useEffect(() => {

        const postPage = async (e) =>{
            try{
                const res = await axios.get(`${NOTICELOCAL}/notice/${param.id}`)
                setText(res.data.result)
                console.log(res.data.result.photoList[0].uniqueName);
                console.log(param.id);
            }
            catch(err){
                console.error(err);
            }
        }
        postPage();
    },[])

    const handleSubmitcoment = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${NOTICELOCAL}/notice/${param.id}`,content,{
                headers:{
                    Authorization:`Bearer ${access_token}`
                }
            })
            console.log(res.data);
        }catch(err){
            console.error(err);
        }
    }

    return(
        <div style={{display:'grid' , justifyItems:'center'}}>
            <div className="board">

                <div className="board-head">
                    <h1>{text.subject}</h1>
                    <h4>{text.memberId}</h4>
                </div>

                <div className="board-body">
                    <span>{text.content}</span>
                    <img src="http://localhost:8082/notice/images/47406e36-118a-4a86-80f4-25e76d0365b6.png" alt="이미지 공간"/>
                    <ul>
                        <li>
                        
                        </li>
                    </ul>
                </div>

                <div className="board-footer">
                    <form>
                        <textarea
                        id="content"
                        value={content}
                        onChange={onChangecontent}
                         placeholder="댓글을 작성하려면 로그인 해주세요">
                        
                        </textarea>
                        
                    </form>

                    <button 
                    onClick={handleSubmitcoment}
                    type="submit">
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