import {pizzasDb} from "../../assets/pizzasDb";
import {PizzaBlock} from "./PizzaBlock/PizzaBlock";

export const Pizzas = ()=>{
    return           <div className="content__items">

        {pizzasDb.pizzas.map((el)=>{
            return   <PizzaBlock pizzaInfo={el}/>
        })}
    </div>
}