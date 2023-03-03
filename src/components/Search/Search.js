
import s from "./Search.module.scss"
export const Search = ({setSearchValue, searchValue}) => {
  
function onClearClick(){
    setSearchValue("")
}
    return <div className={s.root}>
        <input
            value={searchValue}
            onChange={(e)=> setSearchValue(e.target.value) } className={s.root} type="text"/>
        {searchValue &&
            <button onClick={onClearClick}>clear</button>
        }
    </div>
}