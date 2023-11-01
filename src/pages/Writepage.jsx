//글 쓰기 (개인) {로그인}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style/Writepage.css"
import { getCookie } from "../component/cookie";
import ApiGet from "../component/testapiget";

function Write(){

    const navigate = useNavigate();

    const access_token = getCookie("access_token");
    const nickname = ApiGet();

    const [file,setFile] = useState()
  

    const [userwrite,setUserwrite] = useState ({
        subject:'',
        contents:''
    });

    const onchange = (e) =>{
        const {value,name} = e.target;
        setUserwrite({
            ...userwrite,
            [name]:value,
        });
    };

    const onChangeImg = (e) => {
        e.preventDefault();
        const photoList = new FormData();
        
        
        if(e.target.files){
          photoList = e.target.files[0]
        //   photoList.append('file',photoList)
          setFile(photoList)
          console.log(photoList)
          console.log('===useState===')
          console.log(file)
          
        }
      }

    const removeButton = (e) =>{
        e.preventDefault();
    }


    const {subject,content} = userwrite;

    // const [files, setFiles] = useState(null)
    
    // const [imageSrc, setImageSrc] = useState(null);

    // const onUpload = (e) => {
    //     setFiles(e.target.files[0])
    //     const reader = new FileReader();
    //     reader.readAsDataURL(files);

    //     return new Promise((resolve) => { 
    //         reader.onload = () => {	
    //             setImageSrc(reader.result || null); // 파일의 컨텐츠
    //             resolve();
    //         };
    //     });
    // }                  

    const saveBoard = () => {
        axios.post('http://localhost:8082/notice',userwrite,{
            headers:{
                Authorization: `Bearer ${access_token}`
            }
        }).then((res) => console.log("저장"),navigate('/'))
        .catch((error) => console.error(error))
    }
    

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
               
                <div class="file-input-container">
                <div class="file-input">
                    <input 
                    id="upload"
                    accept="image/*" 
                    type="file"
                    className="file-upload"
                    onChange={onChangeImg}
                    onClick={(event)=> { 
                        event.target.value = null
                    }}
                    />     
                <span id="file-name">파일을 선택하세요.</span>
                </div>
            <label for="upload" class="file-label">파일 선택</label>
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