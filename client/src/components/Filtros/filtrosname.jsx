import React from 'react'
import {useDispatch} from "react-redux"
import style from './filters.module.css'
import { aplhabeticalSort } from '../../Redux/actions'


const  FiltrosName = ()=> {
  const dispatch = useDispatch();

    function handleAlphabeticalSort(e) {
        dispatch(aplhabeticalSort(e.target.value))
    }


  return (

    <select className={style.select} name="alphabetical" onChange={e => handleAlphabeticalSort(e)}>
    <option disabled selected>Alphabetical</option>
    <option value="atoz">A -- Z</option>
    <option value="ztoa">Z -- A</option>
</select>



      )
  }
  
  export default FiltrosName
  /*     <div>
        <label htmlFor="up">
            <input
              name =
              id="up"
              name="nameorder"
              checked={ nameorder === "up"}
              onChange={(event) => filterB(event)}
            />
             Ascendiente
          </label>
          <label htmlFor="down">
            <input
              type="radio"
              id="down"
              name="nameorder"
              checked={ nameorder === "down"}
              onChange={(event) => filterB(event)}
            />
            Descendiente 
          </label>
  
      </div> */
