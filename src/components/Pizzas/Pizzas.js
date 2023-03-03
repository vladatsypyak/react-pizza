import {pizzasDb} from "../../assets/pizzasDb";
import {PizzaBlock} from "./PizzaBlock/PizzaBlock";
import {useEffect, useState} from "react";
import Skeleton from "./PizzaBlock/Skeleton";

export const Pizzas = ({categoryId, sortType, searchValue}) => {
    const [pizzas, setPizzas] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
        const sortBy = sortType.sortProperty.replace("-", "");
        const category = categoryId > 0 ? `category=${categoryId}` : "";
        const search = searchValue ? `&search=${searchValue}` : ""
        fetch(`https://63fccae08ef914c5559fa9a6.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`
        )
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setPizzas(res)
                setIsLoading(false)
                window.scrollTo(0, 0)
            })
    }, [categoryId, sortType, searchValue])

    const pizzasArr = pizzas.filter(obj => {
        console.log(obj)
        return !!obj.name.toLowerCase().includes(searchValue.toLowerCase());

    })
        .map((el) => {
            return <PizzaBlock key={el.id} pizzaInfo={el}/>
        })
    return <div className="content__items">

        {isLoading ? [...new Array(6)].map((el, i) => <Skeleton key={i}/>) : pizzasArr
        }

    </div>
}