import { useEffect ,useState} from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch, useSelector } from "react-redux";
import {Recipes } from "../../Redux/actions";
import SearchBar from "../../components/SearchBar/SearchBar";
import Paginados from "../../components/Paginado/Paginado";
import FilterName from "../../components/Filtros/filtrosname";
import FilterTypes from "../../components/Filtros/filterstype";
const  Home = ()=> {


  const dispatch = useDispatch();
  const recipes = useSelector((state)=>state.recipes);
  const allRecipes =useSelector((state)=>state.allRecipes);
  console.log(recipes);
const [nameOrder,setnameOrder] = useState("")

  const [pages,setPages] =useState(1);
  const [recipesPage,setRecipesPage] = useState(9);
  
  const lastrecipes = pages * recipesPage;
  const firstrecipe= lastrecipes - recipesPage;
  const ninerecipes = recipes.slice(firstrecipe,lastrecipes)

  const paginado = (namberpage)=>{
    setPages(namberpage)
  }


  useEffect(()=>{dispatch(Recipes())},[dispatch])

  return (
    <div>
      <FilterTypes/>
      <FilterName setPages={setPages} nameOrder={nameOrder} setnameOrder={setnameOrder}/>
      <SearchBar/>
      <Paginados allRecipes={allRecipes.length} recipesPage={recipesPage} paginado={paginado}/>
      <CardsContainer ninerecipes={ninerecipes}/>

    </div>
  )
}

export default Home;
