import React, { useState } from "react";
import "./style/Writepage.css"

function Write(){

    const [useboard, setUseboard ] = useState ({
        title:'',
        contents:'',
    });

    const {titlea, contentsa} = useboard;

    const onchange = (e) =>{
        const {value,name} = e.target;
        setUseboard({
            ...useboard,
            [name]:value,
        });
    };

    const [save, Setsave] =useState ([])



    
    return (
        <div className="write-body">
            <form className="write-form">

                <div className="naming">
                    <span>작성자 / (회원정보)</span>
                    <input type = "text" placeholder="제목"
                    name="title"
                    value={titlea}
                    onChange={onchange}
                    ></input>
                </div>
                <hr/>
                <div className="contents">

                    <p style={{paddingBottom : "10px"}}>내용</p>
                    <textarea placeholder="내용입력" style={{padding:"7px"}}
                    name="contents"
                    rows="25"
                    value={contentsa}
                    onChange={onchange}
                    ></textarea>

                </div>
                <div className="write">
                    <input type="submit" onClick={() => Setsave(useboard)} ></input>
                </div>
            </form>
            
        </div>
    )
}

export default Write