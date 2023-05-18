import { useEffect } from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch } from "react-redux";
import {Recipes } from "../../Redux/actions";

const  Home = ()=> {
  const dispatch = useDispatch();
  useEffect(()=>{dispatch(Recipes())},[])
  return (
    <div>
      <h1>Vista de Home </h1>
      <CardsContainer/>
    </div>
  )
}

export default Home;
