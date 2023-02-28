import logo from "../../assets/img/pizza-logo.svg"

import s from "./NotFoundBlock.module.scss"
export const NotFoundBlock = (props)=>{
    return   <div className={s.root}>
        <h1>Нічого не знайдено </h1>
        <p className={s.description}>На жаль сторінка не знайдена</p>
    </div>
}