import s from "./Search.module.scss"
import React from "react"
import {SearchContext} from "../../App";

export const Search = () => {
    const {searchValue, setSearchValue} = React.useContext(SearchContext)

    function onClearClick() {
        setSearchValue("")
    }

    return <div className={s.root}>
        <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)} className={s.root} type="text"/>
        {searchValue &&
            <button onClick={onClearClick}>clear</button>
        }
    </div>
}