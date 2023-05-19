import style from "./searBar.module.css"
import { getRecipeByName } from '../../Redux/actions'
import {useDispatch} from 'react-redux'
import { useState } from 'react'
function SearchBar() {
    const dispatch = useDispatch();
    const [name,setName]= useState('');
    function handlerSearchName(event){
        event.preventDefault();
        setName(event.target.value);
    }
    function searchName(name){
        dispatch(getRecipeByName(name))
    }
  return (
    <div className={style.search}>
      <input  className={style.searchInput}  type="text" placeholder='search recipe by name' value={name} onChange={event=>handlerSearchName(event)} />
      <button className={style.searchButton} type="submit" onClick={()=>searchName(name)}>SEARCH</button>
    </div>
  )
}

export default SearchBar
