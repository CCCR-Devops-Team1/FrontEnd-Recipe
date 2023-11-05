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
    const [comment, setComment] = useState([])

    const onChangecontent = (e) =>{
        setContent(e.target.value)
    }

    useEffect(() => {
        const postPage = async () => {
          try {
            const res = await axios.get(`${NOTICELOCAL}/notice/${param.id}`);
            
            console.log(res.data.result.photoList[0]);
            const photoList = res.data.result.photoList;
            setComment( res.data.result.answerList);
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
        
        try {
            const res = await axios.post(`${NOTICELOCAL}/notice/${param.id}`,{
                "content": content
            },{

                headers:{
                    Authorization:`Bearer ${access_token}`,
                    'Content-Type': 'application/json; charset=utf-8'
                }
            })
            console.log(content);
            console.log(res.data);
                
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
            return <img src={`${NOTICELOCAL}/notice/images/${photo}`} alt="" />;
        }
        return null;
    }

    function time(a) { //a에는 UTC시간이 담겨져 있음. 
   
        const kor = new Date(a);
        
        kor.setHours(kor.getHours()+9);
        
        return kor.toLocaleString();
       }

    return(
        <div style={{display:'grid' , justifyItems:'center'}}>
            <div className="board">

                <div className="board-head">
                    <h1>글 제목 : {text.subject}</h1>
                    <h4>회원번호 : {text.memberId}</h4>
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
                {comment ? (
                    comment.map((comment, index) => (
                    <div className="comment" key={index}>
                        <div>
                        <span style={{

                        }}>회원번호: {comment.memberId}</span>
                        <h6 style={{
                            color: "#999"
                        }}>{time(comment.createDate)}</h6>
                        <div style={{

                        }}>{comment.content}</div>
                        
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