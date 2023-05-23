import style from "./Home.module.css";
import { useEffect, useState } from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch, useSelector } from "react-redux";
import { Recipes } from "../../Redux/actions";
import SearchBar from "../../components/SearchBar/SearchBar";
import Paginados from "../../components/Paginado/Paginado";
import FiltrosName from "../../components/Filtros/filtrosname";
import Score from "../../components/Filtros/filterScore";
import FiltersOrigen from "../../components/Filtros/filtersorigen";
import FilterTypes from "../../components/Filtros/filterstype";


function Home() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const allRecipes = useSelector((state) => state.allRecipes);
  const [nameOrder, setnameOrder] = useState("");
  const [order, setOrder] = useState("");
  const [pages, setPages] = useState(1);
  const [recipesPage, setRecipesPage] = useState(9);

  const lastrecipes = pages * recipesPage;
  const firstrecipe = lastrecipes - recipesPage;
  const ninerecipes = recipes.slice(firstrecipe, lastrecipes);

  const paginado = (namberpage) => {
    setPages(namberpage);
  };

  useEffect(() => {
    dispatch(Recipes());
  }, [dispatch]);

  return (
    <div className={style.home}>
      <FiltrosName/> 
      <SearchBar />
      <Score/>
      <FilterTypes/>
      <Paginados
        allRecipes={allRecipes.length}
        recipesPage={recipesPage}
        paginado={paginado}
      />
      <FiltersOrigen/>
      <CardsContainer ninerecipes={ninerecipes} />
    </div>
  );
}
export default Home;
