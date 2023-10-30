//메인홈 (게시판)
import React,{useState, useEffect,useCallback} from "react";
import Paging from "../component/Paging";
import Apiget from "../component/testapiget";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style/Mainhome.css";

function Mainhome () {

    const [userdata , setuserData] = useState([]);
    const [currentPost, setCurrentPost] = useState(userdata);
    const [page, setPage] = useState(1);

    const postPerPage = 10
    const indexOfLastPost = page * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage

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
                const response = await axios.get(`http://notice?page=${page}&size={size}`) //분할해서 페이징 해야하는데 사이즈? 그냥 전부 렌더 해서 그걸 프론트 쪽에서 나눠 보여주는게 낮지 않나?
            }catch(error){
                console.error(error);
            };
        };
    },[]);

    
    
    return(
        <div className="home-body">

            <div className="home-box">
                
                <div className="common-list">
                
                    <div className="board">
                    <span style={{fontSize:28,fontWeight:"bold"}}> 자유 게시판 </span>
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

                    </div>    
                                                                
                </div>             
            </div>
            <Paging page={page} postPage={postPerPage} count={boardLength} setPage={handlePageChange}/>
        </div>
    );
};

export default Mainhome