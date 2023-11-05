//글 쓰기 (개인) {로그인}

import React, { useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style/Writepage.css"
import { getCookie } from "../component/cookie";
import ApiGet from "../component/testapiget";
import { NOTICELOCAL, NOTICEPROD } from "../component/url";

function Write(){

    const navigate = useNavigate();

    const access_token = getCookie("access_token");
    const nickname = ApiGet();   
    // const [imageSrc, setImageSrc] = useState('');


    const fileInput=useRef();
 
    const onClearAttachment=()=>{
           
           fileInput.current.value = "";
       };

    const [userwrite,setUserwrite] = useState ({
        subject:'',
        content:''
    });
    const [file,setFile] = useState();

    const onchange = (e) =>{
        const {value,name} = e.target;
        setUserwrite({
            ...userwrite,
            [name]:value,
        });
    };

    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
          reader.onload = () => {
            setFile(reader.result);
            resolve();
          };
        });
      };

    const onChangeImg = (e) => {
        
        const formData = new FormData();
        
        if(e.target.files){
          const uploadFile = e.target.files[0]
          formData.append('file',uploadFile)
          setFile(uploadFile)
          console.log(uploadFile)
          console.log('===useState===')
          console.log(file)
        }
    }

    const {subject,content} = userwrite;
         
    const saveBoard = (e) => {
        e.preventDefault();
        const formData = new FormData();
        console.log(userwrite.subject);
        console.log(userwrite.content);
        formData.append('subject',userwrite.subject)
        formData.append('content',userwrite.content)
        
        if (file == null){
            formData.append('phtoList',null)
        }
        else{formData.append('photoList',file)}

        try{
        const response = axios.post(`${NOTICELOCAL}/notice`,formData,{
            headers:{
                Authorization:`Bearer ${access_token}`,
                "Content-Type": "multipart/form-data"
            }
        })
        console.log(response.data);
        console.log("전송");
        navigate('/');
    }catch(err){
        console.error(err);
    }}

    return (
        <div className="write-body">
            
            <form className="write-form">
               
                <div className="naming">
                    <span>작성자 : {nickname} </span>
                    <input type = "text" placeholder="제목"
                    name="subject"
                    className="title"
                    value={subject}
                    onChange={onchange}
                    ></input>
                </div>
            
            <div style = {{display:"grid"}}class="file-input-container">

                <div class="file-input">
                    <input 
                    id="upload"
                    accept="image/*,png " 
                    type="file"
                    className="file-upload"
                    ref={fileInput}
                    onChange=
                    {(e) => {
                        encodeFileToBase64(e.target.files[0]);
                        onChangeImg(e);
                        
                    }}
                    />
                </div>
                <button onClick={onClearAttachment}>취소</button>     
                
                <label for="upload" class="file-label">사진 1장 선택</label>
                <div style={{display: "block" , width: "100%", height: "auto",border:'3px solid black'}} contentEditable="true">{file && <img 
                style={{width: "400px"}}
                src={file} alt="preview-img" />}</div>
                </div>
                    <hr/>
                <div className="content">

                    
                    <textarea placeholder="내용입력" style={{padding:"7px",fontSize:'1.5em'}} rows="25"
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