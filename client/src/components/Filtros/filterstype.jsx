
import style from "./filters.module.css"
import { useSelector, useDispatch } from "react-redux";
import { dietsType, filterdiets } from "../../Redux/actions";
import { useEffect } from "react";

const FilterTypes = () => {
  const dispatch = useDispatch();
  const dietsTypes = useSelector((state) => state.dietsTypes);

  useEffect(() => {
    dispatch(dietsType());
  }, [dispatch]);

  const FilterTypes = (event) => {
    event.preventDefault();
    dispatch(filterdiets(event.target.value));
  };

  return (
    <div>
      <label className={style.filters}>
        DIET TYPES -
        <select onChange={(event) => FilterTypes(event)}>
          <option disabled selected>
            Select...
          </option>
          <option value="gluten free">Gluten Free</option>
          <option value="ketogenic">Keto</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="lacto vegetarian">Lacto-Vegetarian</option>
          <option value="ovo vegetarian">Ovo-Vegetarian</option>
          <option value="lacto ovo vegetarian">Lacto-Ovo-Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="pescetarian">Pescetarian</option>
          <option value="paleolithic">Paleo</option>
          <option value="primal">Primal</option>
          <option value="dairy free">Dairy Free</option>
                      <option  value="All">Todos</option>
            {
               dietsTypes.map((type)=>
                ( 
                  <option value={type.name} key={type.id}>{type.name}</option>
                )
              )
            }
 
        </select>
      </label>
    </div>
  );
};

export default FilterTypes;
