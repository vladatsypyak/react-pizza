import {useState} from "react";
import s from "./Pagination.module.scss"
import ReactPaginate from "react-paginate";

export const Pagination = ({onChangePage}) => {


    return <div className={s.root}>
        <ReactPaginate
            className={s.pagination}
            breakLabel="..."
            nextLabel=">"
            onPageChange={e => onChangePage(e.selected + 1)}
            pageRangeDisplayed={5}
            pageCount={3}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    </div>
}