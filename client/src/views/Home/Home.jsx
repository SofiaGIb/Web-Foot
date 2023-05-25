import style from "./Home.module.css";
import { useEffect, useState } from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch, useSelector } from "react-redux";
import { Recipes } from "../../Redux/actions";
import SearchBar from "../../components/SearchBar/SearchBar";
 import Paginado from "../../components/Paginado/Paginado";
import NavBar from "../../components/NavBar/NavBar"; 
import Filtersall from "../../components/Filtros/filtersall";


function Home() { 
  const recipes = useSelector((state) => state.recipes);
  const allRecipes = useSelector((state) => state.allRecipes);
  const [nameOrder, setnameOrder] = useState("");
  const [order, setOrder] = useState("");
  const [pages, setPages] = useState(1);
  const [recipesPage, setRecipesPage] = useState(9);

  const lastrecipes = pages * recipesPage;
  const firstrecipe = lastrecipes - recipesPage;
  const ninerecipes = recipes.slice(firstrecipe, lastrecipes);

  const pagination = (namberpage) => {
    setPages(namberpage);
  };  


  return (
<body className={style.body}>
    <div className={style.home}>
      <header className={style.header}>  <NavBar/>
</header>
<SearchBar />
      <Filtersall/>
       <Paginado
        recipesPage={recipesPage}
        allRecipes={recipes.length}
        pagination={pagination}
  />
      <CardsContainer ninerecipes={ninerecipes} />

    </div>
</body>
  );
}
export default Home;
