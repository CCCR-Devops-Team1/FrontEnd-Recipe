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
    const size = 10
    

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
                const response = await axios.get(`http://www.resipetips.net/notice/notice?page=${page}&size=${size}`) 
                setuserData(response.data.result);
                
            }catch(error){
                console.error(error);
            };
        };
        postedText()
    },[]);


    function time(a) { //a에는 UTC시간이 담겨져 있음. 
   
        const kor = new Date(a);
        
        kor.setHours(kor.getHours()+9);
        
        return kor.toLocaleString();
       }
    
    return(
        <div className="home-body">

            <div className="home-box">
                
                <div className="common-list">
                
                    <div className="board">
                    <span style={{fontSize:28,fontWeight:"bold"}}> 최근 게시판 </span>
                    <input type="text" placeholder="글찾기"></input>
                        
                    {
                        currentPost.map((board, index) => {
                        return (
                            <Link to={`/board/${board.id}`}>
                                <div className="board-line">
                                    
                                    <div>{index + 1}</div>
                                    <span style={{width:'49%'}}>{board.subject}</span>
                                    
                                    <span style={{
                                    textAlign:"right",
                                    width:'49%',
                                    fontSize: 'medium'}}>                                   
                                    
                                    { (board.updateDate) ? time(board.updateDate) : time(board.createDate)}</span>
                                </div>
                            </Link>
                            )
                        })
                    }
                    
                    </div>                                              
                </div>             
            </div>
            <Paging page={page} postPage={size} count={boardLength} setPage={handlePageChange}/>
        </div>
    );
};

export default Mainhome