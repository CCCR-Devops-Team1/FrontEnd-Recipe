import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style/Update.css';
import axios from "axios";
import Paging from "../component/Paging";

function Update() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [currentPost, setCurrentPost] = useState(posts);

  const postPerPage = 10;
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const boardLength = posts.length;

  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    setCurrentPost(posts.slice(indexOfFirstPost, indexOfLastPost));
  }, [posts, page]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts'
    }).then(response => setPosts(response.data));
  }, []);

  return (
    <div className="update-body">
      <form className="update-form">
        <table>
          <thead>
            <tr>
              <th colSpan="2">
                <h2>작성목록</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2" >
                {currentPost.map((board, index) => (
                  <Link to={`/board/${board.id}`} key={board.id}>
                    <div className="underline">
                      <div>{index + 1}</div>
                      <span>{board.title}</span>
                    </div>
                  </Link>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
        <Paging page={page} postPage={postPerPage} count={boardLength} setPage={handlePageChange} />
      </form>
    </div>
  );
}

export default Update;
