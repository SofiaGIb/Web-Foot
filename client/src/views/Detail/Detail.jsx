import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
 import { useParams } from "react-router-dom";
 import { DetailRecipe } from "../../Redux/actions";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const Details = useSelector((state) => state.Details);
  useEffect(() => {
    dispatch(DetailRecipe(id));
  },[]);

  return (
    <div >
      <div>
         <div>
          <div>id:{Details.id}</div>
<p>steps : {Details.steps}</p>
</div>
<h1>name :{Details.name}</h1>
</div>
<div>
<p>sumary:{Details.summary}</p>
</div>
<div>health score :{Details.healthScore}</div>
<div>
<img src={Details.image} alt="Pic not found" />
</div>
<div>diets :{Details.diets }</div>
 
        <p>steps : {Details.steps}</p>
      </div>
  );
}

export default Detail;
