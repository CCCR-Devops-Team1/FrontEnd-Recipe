import React,{useEffect, useState} from "react";
import axios from "axios";
import Pagination from 'react-js-pagination'
import './style/Recipes.css'

const Recipes = ()=> {
    const [page, setPage] = useState(1);

    const handlePageChange = (page) => {
        setPage(page)
    };

    return(
        <div className="recipe-body">
            
            <div>
                <input type="text" placeholder="레시피 찾기"></input>
            </div>


            <div>

                <span>No.</span>
                <span>제목</span>
                <span>글쓴이</span>

            </div>


            <Pagination
                activePage={page}
                itemsCountPerPage={10}
                totalItemsCount={450}
                pageRangeDisplayed={5}
                prevPageText={"‹"}
                nextPageText={"›"}
                onChange={handlePageChange}
            />


        </div>
    )
}
export default Recipes