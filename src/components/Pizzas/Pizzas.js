import {pizzasDb} from "../../assets/pizzasDb";
import {PizzaBlock} from "./PizzaBlock/PizzaBlock";
import {useEffect, useState} from "react";

export const Pizzas = ()=>{
    const [pizzas, setPizzas] = useState([])
    useEffect(()=>{
        fetch("https://63fccae08ef914c5559fa9a6.mockapi.io/items")
            .then((res)=>{
              return res.json()
            })
            .then((res)=>{
                console.log(res)
                setPizzas(res)
            })
    }, [])
    return           <div className="content__items">

        {pizzas.map((el)=>{
            return   <PizzaBlock key={el.id} pizzaInfo={el}/>
        })}
    </div>
}