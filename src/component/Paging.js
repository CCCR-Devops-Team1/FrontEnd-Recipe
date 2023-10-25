import React from "react";
import Pagination from "react-js-pagination";

const Paging = ({page,postPage, count, setPage}) => {

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={postPage}
      totalItemsCount={count}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={setPage}
    />
  );
};

export default Paging;