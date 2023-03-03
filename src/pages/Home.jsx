import {Categories} from "../components/Categories/Categories";
import {Sort} from "../components/Sort/Sort";
import {Pizzas} from "../components/Pizzas/Pizzas";
import {useState} from "react";

export const Home = ({searchValue})=>{
    const [categoryId, setCategory] = useState(0)
    const [sortType, setSortType] = useState({
        name: "популярності",
        sortProperty: "rating"
    })
    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={(i)=> setCategory(i)}/>
                <Sort value={sortType} onChangeSort={(i)=> setSortType(i)}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <Pizzas searchValue={searchValue} categoryId={categoryId} sortType={sortType}/>
        </>
    )
}