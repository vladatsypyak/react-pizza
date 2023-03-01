import {pizzasDb} from "../../assets/pizzasDb";
import {PizzaBlock} from "./PizzaBlock/PizzaBlock";
import {useEffect, useState} from "react";
import Skeleton from "./PizzaBlock/Skeleton";

export const Pizzas = ({categoryId, sortType}) => {
    const [pizzas, setPizzas] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const order = sortType.sortProperty.includes("-") ? "asc" :  "desc";
        const sortBy = sortType.sortProperty.replace("-", "");
        const category = categoryId > 0 ? `category=${categoryId}`: ""
        fetch(  `https://63fccae08ef914c5559fa9a6.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
        )
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setPizzas(res)
                setIsLoading(false)
                window.scrollTo(0, 0)
            })
    }, [categoryId, sortType])
    return <div className="content__items">

        {isLoading ? [...new Array(6)].map((el, i) => <Skeleton key={i}/>) : pizzas.map((el) => {
            return <PizzaBlock key={el.id} pizzaInfo={el}/>
        })}

    </div>
}