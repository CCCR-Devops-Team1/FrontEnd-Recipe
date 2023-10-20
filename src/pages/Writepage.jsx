//글 쓰기 (개인) {로그인}

import React, { useState } from "react";
import axios from "axios";
import "./style/Writepage.css"

function Write(){

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
    
    return (
        <div className="write-body">
            <form className="write-form">

                <div className="naming">
                    <span>작성자 / (회원정보)</span>
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
                <div className="write">
                    <input type="submit" ></input>
                </div>
            </form>
            
        </div>
    )
}

export default Write