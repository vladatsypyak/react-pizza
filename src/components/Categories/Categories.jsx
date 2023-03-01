import {useState} from "react";

export const Categories = ({value, onChangeCategory})=>{
    const categories = [
        "Всі", "М'ясні", "Вегетеріанські", " На грилі", "Гострі", "Закриті"
    ]
    const onClickCategory = (i) => {
        onChangeCategory(i)
    }
    return         <div className="categories">
        <ul>
            {categories.map((el, i)=>{
                return <li key={i} onClick={()=> onChangeCategory(i)} className={value === i ? "active" : ""}>{el}</li>
            })}
        </ul>
    </div>
}