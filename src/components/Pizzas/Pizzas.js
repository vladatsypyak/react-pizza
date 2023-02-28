import {pizzasDb} from "../../assets/pizzasDb";
import {PizzaBlock} from "./PizzaBlock/PizzaBlock";
import {useEffect, useState} from "react";
import Skeleton from "./PizzaBlock/Skeleton";

export const Pizzas = () => {
    const [pizzas, setPizzas] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch("https://63fccae08ef914c5559fa9a6.mockapi.io/items")
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setPizzas(res)
                setIsLoading(false)
                window.scrollTo(0, 0)
            })
    }, [])
    return <div className="content__items">

        {isLoading ? [...new Array(6)].map((el, i) => <Skeleton key={i}/>) : pizzas.map((el) => {
            return <PizzaBlock key={el.id} pizzaInfo={el}/>
        })}

    </div>
}