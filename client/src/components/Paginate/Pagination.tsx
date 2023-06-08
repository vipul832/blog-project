import ReactPaginate from "react-paginate";

type paginateProp = {
  totalPage: number;
  setPage: Function;
};

export default function Pagination({ totalPage, setPage }: paginateProp) {
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
          setPage(e.selected);
          console.log(e);
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
