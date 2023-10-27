//글 쓰기 (개인) {로그인}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style/Writepage.css"
import { getCookie } from "../component/cookie";

function Write(){

    const navigate = useNavigate();

    const cookie = getCookie("Token");
    const nickname = getCookie("info");   

    const [imageSrc, setImageSrc]= useState(null);

    const onUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        return new Promise((resolve) => { 
            reader.onload = () => {	
                setImageSrc(reader.result || null); // 파일의 컨텐츠
                resolve();
            };
        });
    }

    const [userwrite,setUserwrite] = useState ({
        subject:'',
        contents:'',
    });

    const {subject,contents} = userwrite;

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
            const res = await axios.post("url",userwrite)
            console.log(res.data);
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
                    name="subject"
                    value={subject}
                    onChange={onchange}
                    ></input>
                </div>
                <hr/>
                <div>

                    <span>
                        안녕하세여
                    </span>
                    <span>
                        
                    <input 
                        accept="image/*" 
                        multiple type="file"
                        onChange={e => onUpload(e)}
                    />
                    <img 
                        width={'70%'} 
                        src={imageSrc} 
                    />
                    
                    </span>
                </div>

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

export default Write