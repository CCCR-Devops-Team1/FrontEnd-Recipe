import React, { useState,useEffect } from "react";
import axios from "axios";
import ApiGet from "../component/testapiget";
import ModalBasic from "../component/Modal";
import "./style/Mypage.css"
import { getCookie } from "../component/cookie";
import { MEMBERLOCAL } from "../component/url";


const Mypage = () => {
    
    const modal = ModalBasic('');
    const accessToken  = getCookie('accessToken');
    const myinfomaiton  =("");

    const [changepw,setChangepw] = useState();

    const onChange = (e) => {
        setChangepw(e.target.value);
    };
    
    const info = async () => {
        try{myinfomaiton= await axios.get('/user',{
            headers:{
                Authorization: `Bearer ${accessToken}`
            },
        })

        } catch(error){  
            
            console.log(error);

        }

    }

    const handleSubmit = (e) => {
        e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
    
        // 여기에 폼 데이터 처리 로직 작성
    }
    

    const escape = async (e) =>{
        e.preventDefault();
       
        console.log("안뇽");
        try{
            const response = await axios.delete('u/user',{
                headers:{
                    Authorization:`Bearer ${accessToken}`
                }
            })
            console.log("회원탈퇴 ",response.data);
        }
        catch(error){
            console.error("회원탈퇴 안됨",error);
        }      

    }

    const changePW = async (e) =>{
        try{
            const response = await axios.put(`${MEMBERLOCAL}/user`,{})
            console.log("skskks");
        }
        catch(error){
            console.error(error);
        }
    }

    return(
        <div className="mypage-body">
            
            <div className="userinfo">

                <ul>
                    <li>{myinfomaiton}</li>
                </ul>


                <form className="infosubmit" onSubmit={handleSubmit}> 
                
                    <button type="submit" onClick={escape}>회원탈퇴</button>  

                    <input type="password"
                    className="newpw" 
                    name="changepw" 
                    value={changepw} 
                    placeholder="변경할 비밀번호"
                    onChange={onChange}
                    ></input>
                    <button type="submit" onClick={changePW}>변경확인</button>

                </form>
                
            </div>


        </div>
    );
};

export default Mypage;