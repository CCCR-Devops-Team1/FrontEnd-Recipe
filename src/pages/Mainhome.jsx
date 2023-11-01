//메인홈 (게시판)
import React,{useState, useEffect,useCallback} from "react";
import Paging from "../component/Paging";
import Apiget from "../component/testapiget";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style/Mainhome.css";

function Mainhome () {

    const [userdata , setuserData] = useState([]);
    const [currentPost, setCurrentPost] = useState([]);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    
    
    const indexOfLastPost = page * size
    const indexOfFirstPost = indexOfLastPost - size

    const boardLength = userdata.length

    const handlePageChange = (page) => {
      setPage(page);
    };
    
    useEffect(() => {
        setCurrentPost(userdata.slice(indexOfFirstPost, indexOfLastPost))
      }, [userdata, page])

    useEffect(() => {
        const postedText = async() =>{
            try{
                const response = await axios.get(`http://localhost:8082/notice?page=${page}&size=${size}`) 
                setuserData(response.data.result);
                console.log("페이지 받음");
            }catch(error){
                console.error(error);
            };
        };
        postedText()
    },[]);

    
    
    return(
        <div className="home-body">

            <div className="home-box">
                
                <div className="common-list">
                
                    <div className="board">
                    <span style={{fontSize:28,fontWeight:"bold"}}> 최근 게시판 </span>
                    <hr/>
                        
                    {
                        currentPost.map((board, index) => {
                        return (
                            <Link to={`/board/${board.id}`}>
                                <div className="board-line">
                                    
                                    <div>{index + 1}</div>
                                    <span>{board.title}</span>
                                    
                                </div>
                            </Link>
                            )
                        })
                    }

                    {currentPost.map((list)=>{
                        return(
                            <ul>
                                <li key={list.id}>
                                    <div>{list.subject}</div>
                                </li>
                            </ul>
                        )
                    }
                        
                            )}
                    
                    </div>    
                                                                
                </div>             
            </div>
            <Paging page={page} postPage={size} count={boardLength} setPage={handlePageChange}/>
        </div>
    );
};

export default Mainhome