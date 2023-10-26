import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './style/Update.css'
import axios from "axios";
import Paging from "../component/Paging";

function Update () {

    const [posts, setPosts] = useState([]);
   
    const [page,setPage] = useState(1);

    const [currentPost, setCurrentPost] = useState(posts)

    const postPerPage = 10
    const indexOfLastPost = page * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage

    const boardLength = posts.length

    const handlePageChange = (page) => {
        setPage(page)
    }

    useEffect(() => {
        setCurrentPost(posts.slice(indexOfFirstPost, indexOfLastPost))
      }, [posts, page])
      

    useEffect(() => {
        axios ({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts'
        }).then(response => setPosts(response.data))
    })
    
    return (

        <div className="update-body"> 
            
            <form className="update-form">

                <tr id="wra">
                    <h2>작성목록</h2>
                    
                
                    
                <td id="line">
                    
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

                </td>
                    
                
                </tr>    


                <Paging page={page} postPage={postPerPage} count={boardLength} setPage={handlePageChange}/>
            </form>
            
        </div>

    )
}

export default Update