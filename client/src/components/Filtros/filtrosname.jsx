import { useDispatch } from "react-redux";
import { getRecipeByName} from "../../Redux/actions";
import style from "./filters.module.css"


const FilterName = ({setPages,nameorder,setnameOrder})=>{
    const dispatch = useDispatch();

    const filterB = (event)=>{
     setnameOrder(event.target.id);
     dispatch(getRecipeByName(event.target.id))
     setPages(1)
   
    }
   
    return (
        <div className={style.orderad}>
        <label htmlFor="up">
          <input
            type="radio"
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
      </div>
  

    )
  }
  export default FilterName 