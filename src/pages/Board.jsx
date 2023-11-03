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
    const [photo,setPhoto] = useState('');

    const access_token = getCookie('access_token')
    const param =useParams();
    const [loading, setLoading] = useState(true); // 데이터 로딩 상태를 추적
    const [content ,setContent] = useState ('');

    const onChangecontent = (e) =>{
        setContent(e.target.value)
    }

    useEffect(() => {
        const postPage = async () => {
          try {
            const res = await axios.get(`${NOTICELOCAL}/notice/${param.id}`);
            
            console.log(res.data.result.photoList[0]);
            const photoList = res.data.result.photoList;
            const commentList = res.data.result.commentList;
            setLoading(false);

            setText(res.data.result);
            setPhoto(photoList[0].uniqueName);
            
          } catch (err) {
            console.error(err);
          }
        };
        postPage();
      }, []);
      

    const handleSubmitcontent = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${NOTICELOCAL}/notice/${param.id}`,{
                content:content
            },{
                headers:{
                    Authorization:`Bearer ${access_token}`
                }
            })
            console.log(res.data);
            console.log(content);
            setLoading(false);
            
        }catch(err){
            console.error(err);
        }
    }

    if(loading){
    return(
        <div>
            loadin....g
        </div>
        )
    }

    const photoView = () => {
        if(photo)
        {
            return <img src={`http://localhost:8082/notice/images/${photo}`} alt="" />;
        }
        return null;
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
                    {photoView()}
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
                    onClick={handleSubmitcontent}
                    type="submit">
                        글 쓰기
                    </button>
                </div>   

                <div className="comment">
                {content.answerList ? (
                    content.answerList.map((comment, index) => (
                    <div className="comment" key={index}>
                        <div>
                        <span>{comment.id}</span>
                        <span>{comment.content}</span>
                        </div>
                    </div>
                    ))
                    ) : (
                        <div>No comments available.</div>
                    )}
                </div>
            </div>
        </div>  
    )
}


export default Board