import { useEffect } from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch } from "react-redux";
import {Recipes } from "../../Redux/actions";
import SearchBar from "../../components/SearchBar/SearchBar";
import Paginado from "../../components/Paginado/Paginado"

const  Home = ()=> {

  const [page, setPage] = useState(1);
  const [recipesPage, setRecipesPage] = useState(9);
  
  const quantityRecipesPage = page * recipesPage;
  const firstRecipePage = quantityRecipesPage - recipesPage;
  const showRecipesPage = allRecipes.slice(firstRecipePage, quantityRecipesPage);
  
  const paginado = (pageNumber) => {
      setPage(pageNumber)
  };










  const dispatch = useDispatch();
  useEffect(()=>{dispatch(Recipes())},[dispatch])

  return (
    <div>
      <h1>Vista de Home </h1>
      <Paginado  recipesPage={recipesPage} allRecipes={allRecipes.length} paginado={paginado}/>
      <SearchBar/>
      <CardsContainer/>

    </div>
  )
}

export default Home;
