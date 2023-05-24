import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dietsType,Recipes,scoreSort,filterBySource,aplhabeticalSort,filterdiets } from '../../Redux/actions';
import style from "./filters.module.css";

function Filtersall() {
      
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const dietsTypes = useSelector((state) => state.dietsTypes);
  const [selectedDietType, setSelectedDietType] = useState("All Diet Types");
  const [selectedSource, setSelectedSource] = useState("All Sources");
 
  useEffect(() => {
    dispatch(Recipes());
    dispatch(dietsType());
  }, [dispatch]);

  
  //! -----FILTER DIETS--------
  const handlefilterdiets = (selectedDietType) => {
    setSelectedDietType(dietsTypes);
    dispatch(filterdiets(selectedDietType));
  };

  //! -----FILTER SOURCE--------
  const handleFilterBySource = (selectedSource) => {
    setSelectedSource(selectedSource);
    dispatch(filterBySource(selectedSource));
  };

   //! -----RESETEO FILTRO--------
   const handleResetFilters = () => {
    setSelectedDietType("All Diet Types");
    setSelectedSource("All Sources");
    dispatch(filterdiets("all"));
    dispatch(filterBySource("all"));
  };

  //!-----FILTRO ORDEN ALFABETICO --------
  const handleSortChange = (event) => {
    dispatch(aplhabeticalSort(event.target.value))
  };

  //!-----FILTRO ORDEN HealthScore--------
  const handleSortScoreChange = (event) => {
    dispatch(scoreSort(event.target.value))
  }


  return (
    <div className={style.container}>
       <div className={style.filterContainer}>
        <span className={style.titleFilter}>Filter By: </span>
        <select defaultValue="Diet Type" onChange={(e) => handlefilterdiets(e.target.value)}  style={{ width: "180px" }}>
          <option value="Diet Type" disabled>
            Diet Type
          </option>
          <option value="All Diet Types">All Diet Types</option>
          {dietsTypes.map((Types) => (
            <option key={Types.id} value={Types.name}>
             {Types.name}
            </option>
          ))}
        </select>
      </div>
 
  
      <div className={style.filterContainer}>
        <select defaultValue="Source" onChange={(event) => handleFilterBySource(event.target.value)}  style={{ width: "180px" }}>
          <option value="Source" disabled>
            Source
          </option>
          <option value="All Sources">All Sources</option>
          <option value="API">API</option>
          <option value="Database">Database</option>
        </select>
      </div>
  
      <div className={style.filterContainer} >
        <span className={style.titleFilter}>Sort By: </span><br/>
        <select defaultValue="Order By" onChange={handleSortChange} style={{ width: "180px" }}>
          <option value="Order By" disabled="disabled">Order By</option>
          <option value="AtoZ">A-Z</option>
          <option value="ZtoA">Z-A</option>
        </select>
      </div>
  
      <div className={style.filterContainer}>
        <select defaultValue="HealthScore"onChange={handleSortScoreChange} style={{ width: "180px" }}>
          <option value="HealthScore" disabled="disabled">Health Score</option>
          <option value={"ascendent"}>Higher</option>
          <option value={"descendent"}>Lower</option>
        </select>
      </div>
      <button className={style.resetButton} onClick={handleResetFilters}>RESET FILTERS</button>
    </div>
  );

}

export default Filtersall