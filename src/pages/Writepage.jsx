//글 쓰기 (개인) {로그인}

import React, { useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style/Writepage.css"
import { getCookie } from "../component/cookie";
import {ApiGet} from "../component/testapiget";

function Write(){

    const navigate = useNavigate();

    const access_token = getCookie("access_token");
    const nickname = ApiGet();

    const [imageSrc, setImageSrc]= useState(null);

    const onUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);   
        
        return new Promise((resolve) => { 
            reader.onload = () => {	
                setImageSrc(reader.result || null);// 파일의 컨텐츠
                resolve();
            };
        });
    }

    const fileInput=useRef();
 
    const onClearAttachment=(e)=>{
           e.preventDefault();
           setImageSrc(null);
           fileInput.current.value = "";
       };

    const [userwrite,setUserwrite] = useState ({
        subject:'',
        contents:'',
    });

    const {subject,content} = userwrite;

    const onchange = (e) =>{
        const {value,name} = e.target;
        setUserwrite({
            ...userwrite,
            [name]:value,
        });
    };

    const saveBoard = async (e) => {
        try{
        const response = await axios.post("http://www.recipetips.net/notice:8082/",userwrite,{
           headers:{
            Authorization:`Bearer ${access_token}`,
            "Content-Type": "multipart/form-data"
           },
           
        })
        if(response.data.code ==200){
            console.log("통신ㅇ");
           
            navigate('/');
        }
        else{
            console.log("통신x");
        }
        }catch(error){
            console.error(error);
        }
    }

 
    return (
        <div className="write-body">
            
            <form className="write-form">
               
                <div className="naming">
                    <span style={{borderBottom: '1px solid black'}}>작성자 : {nickname} |</span>
                    <input type = "text" placeholder="제목"
                    name="subject"
                    value={subject}
                    onChange={onchange}
                    ></input>
                </div>
                
                <div>
                    <span>
                        <button className="fileremover" onClick={onClearAttachment}></button>
                    </span>
                    <span>

                    <input 
                        id="img"
                        accept="image/*" 
                        ref={fileInput}
                        multiple type="file"
                        onChange={e => onUpload(e)}
                        onClick={(event)=> { 
                            event.target.value = null
                          }}
                    />
                    <img 
                        width={'25%'} 
                        src={imageSrc} 
                        className="preview-img"
                    />
                    </span>

                </div>

                <div className="content">

                    <p style={{paddingBottom : "10px"}}>내용</p>
                    <textarea placeholder="내용입력" style={{padding:"7px"}} rows="25"
                    name="content"
                    value={content}
                    onChange={onchange}
                    ></textarea>

                </div>
                
            </form>
            <div className="writeSave">
                    <button type='submit' onClick={saveBoard}>글저장</button>
            </div>
            
        </div>
    )
}

export default Write