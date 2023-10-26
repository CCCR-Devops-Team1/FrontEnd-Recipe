//글 쓰기 (개인) {로그인}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style/Writepage.css"
import { getCookie } from "../component/cookie";

function Updownpunk(){

    const navigate = useNavigate();

    const cookie = getCookie("Token");
    const nickname = getCookie("info");

    const [userwrite,setUserwrite] = useState ({
        title:'',
        contents:'',
    });

    const {title,contents} = userwrite;

    const onchange = (e) =>{
        const {value,name} = e.target;
        setUserwrite({
            ...userwrite,
            [name]:value,
        });
    };

    const saveBoard = async (e) => {
        e.preventDefault();
        
        try{
            await axios.post(`/notice`,
            {userwrite}
            ,{  headers:{
                    'Authorization': `Bearer ${cookie}`,
                },
            });
            
        }   
        catch (err){
            console.log("작성 실패",err);
        
        }
    };
    
    return (
        <div className="write-body">
            <form className="write-form">

                <div className="naming">
                    <span>{nickname}</span>
                    <input type = "text" placeholder="제목"
                    name="title"
                    value={title}
                    onChange={onchange}
                    ></input>
                </div>
                <hr/>
                <div className="contents">

                    <p style={{paddingBottom : "10px"}}>내용</p>
                    <textarea placeholder="내용입력" style={{padding:"7px"}} rows="25"
                    name="contents"
                    value={contents}
                    onChange={onchange}
                    ></textarea>

                </div>
                <div className="writeSave">
                    <button type='submit' onClick={() => saveBoard}>글저장</button>
                </div>
            </form>
            
        </div>
    )
}

export default Updownpunk