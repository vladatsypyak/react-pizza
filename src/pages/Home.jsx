import {Categories} from "../components/Categories/Categories";
import {Sort} from "../components/Sort/Sort";
import {Pizzas} from "../components/Pizzas/Pizzas";
import {useState} from "react";
import ReactPaginate from "react-paginate";
import {Pagination} from "../components/Pagination";

export const Home = () => {
    const [categoryId, setCategory] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    const [sortType, setSortType] = useState({
        name: "популярності",
        sortProperty: "rating"
    })
    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={(i) => setCategory(i)}/>
                <Sort value={sortType} onChangeSort={(i) => setSortType(i)}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <Pizzas currentPage={currentPage} setCurrentPage={setCurrentPage}
                    categoryId={categoryId} sortType={sortType}/>
            <Pagination onChangePage={n => setCurrentPage(n)}/>
        </>
    )
}