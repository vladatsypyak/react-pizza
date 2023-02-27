import {useState} from "react";

export const Categories = (props)=>{
    const [activeIndex, setActiveIndex] = useState(0);
    const categories = [
        "Всі", "М'ясні", "Вегетеріанські", " На грилі", "Гострі", "Закриті"
    ]
    const onClickCategory = (i) => {
      setActiveIndex(i)
    }
    return         <div className="categories">
        <ul>
            {categories.map((el, i)=>{
                return <li key={i} onClick={()=> onClickCategory(i)} className={activeIndex === i ? "active" : ""}>{el}</li>
            })}
        </ul>
    </div>
}