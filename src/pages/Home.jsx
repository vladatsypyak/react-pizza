import {Categories} from "../components/Categories/Categories";
import {Sort} from "../components/Sort/Sort";
import {Pizzas} from "../components/Pizzas/Pizzas";

export const Home = ()=>{
    return (
        <>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <Pizzas/>
        </>
    )
}