import React from "react";
import "./style/Writepage.css"
function Write(){
    return (
        <div className="write-body">
            <form className="write-form">

                <div className="naming">
                    <span>작성자 / (회원정보)</span>
                    <input placeholder="제목"></input>
                </div>
                
                <div className="contents">

                    <p>내용</p>
                    <textarea placeholder="내용입력">
                    
                    </textarea>

                </div>
                <div className="write">
                    <input type="submit"></input>
                </div>
            </form>
            
        </div>
    )
}

export default Write