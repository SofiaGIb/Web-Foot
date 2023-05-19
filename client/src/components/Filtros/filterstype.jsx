import { useSelector, useDispatch } from 'react-redux'
import { dietsType,filterdiets } from '../../Redux/actions'; 
 import { useEffect } from 'react';




const FilterTypes= ({setPages}) =>{
    const dispatch = useDispatch()
    const  dietsTypes = useSelector((state) => state.dietsTypes)
  
    useEffect(()=>{
      dispatch(dietsType())
    },[dispatch])
  
    const FilterTypes = (event) =>{
      event.preventDefault()
      dispatch(filterdiets(event.target.value))
      setPages(1)
    }
  
    return (
      <div >
        <label >
          Por Tipo -
          <select  onChange={(event)=>FilterTypes(event)}>
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
    )
  };
  
  export default FilterTypes;