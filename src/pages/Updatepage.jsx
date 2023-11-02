import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style/Update.css';
import ApiGet from "../component/testapiget";
import axios from "axios";
import Paging from "../component/Paging";
import { NOTICELOCAL } from "../component/url";

function Update() {

  const myinfo = ApiGet();
  

  const member = 1;
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

  // useEffect(() => {
  //   setCurrentPost(userdata.slice(indexOfFirstPost, indexOfLastPost))
  // }, [userdata, page])


  useEffect(() => {
    const myPost = async () =>{
      try{
        const response = await axios.get(`${NOTICELOCAL}/notice`)
        setuserData(response.data.result)

      }catch(error){
      console.error(error);
      }

    }    
    myPost();
  },[])


  function time(a) { //a에는 UTC시간이 담겨져 있음. 
   
    const kor = new Date(a);
    
    kor.setHours(kor.getHours()+9);
    
    return kor.toLocaleString();
   }

  
  return (
    <div className="update-body">
      <form className="update-form">
      
       <h2 style={{margin: 20}}>작성목록</h2>
      <p>{userdata.id}</p>


      <ul>
        <li key={userdata.id}>
          {userdata.memberId}
          {userdata.subject}
        </li>
      </ul>
      {/* {
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
          } */}
        <Paging page={page} postPage={size} count={boardLength} setPage={handlePageChange} />
      </form>
    </div>
  );
}

export default Update;
