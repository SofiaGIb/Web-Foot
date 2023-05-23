import style from './filters.module.css'
import { useSelector, useDispatch } from "react-redux";
import { dietsType, filterdiets, scoreSort } from "../../Redux/actions";
import { useEffect } from "react";

import React from "react";

export default function Score() {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);

  function handleScoreSort(e) {
    dispatch(scoreSort(e.target.value));
  }

  return (
    <div>
      <select
        className={style.select}
        name="numerical"
        onChange={(e) => handleScoreSort(e)}
      >
        <option disabled selected>
          Score
        </option>
        <option value="asc">From Min to Max</option>
        <option value="desc">From Max to Min</option>
      </select>
    </div>
  );
}
