import React, { useState } from "react";
import ReactPaginate from "react-paginate";

type paginateProp = {
  totalPage: number;
  setPage: Function;
};

export default function Pagination({ totalPage, setPage }: paginateProp) {
  const [localPage, setLocalPage] = useState(0);
  console.log("local", localPage);
  return (
    <div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={totalPage} // total number of page
        className="flex gap-3 items-center justify-center"
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        onPageChange={(e) => {
          setPage(e.selected + 1);
          setLocalPage(e.selected);
          // console.log("local", localPage);
        }}
        activeClassName={"bg-primaryPurple text-white"}
        pageClassName={
          "div w-10 rounded-full flex justify-center hover:bg-primaryPurple hover:text-white p-2"
        }
        previousClassName={
          "border p-2 rounded  border-primaryPurple hover:bg-primaryPurple hover:text-white mr-40"
        }
        nextClassName={
          "border p-2 rounded  border-primaryPurple hover:bg-primaryPurple hover:text-white ms-40"
        }
      />
    </div>
  );
}
