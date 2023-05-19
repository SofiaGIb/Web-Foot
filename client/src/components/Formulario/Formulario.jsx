import React from "react";
import { addRecipe, dietsType } from "../../Redux/actions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

 function validate(input) {
  const errors = {};
  if (!input.name) errors.name = "Please complete with a recipe name";
  if (!input.summary)
    errors.summary = "Please add some comments about your recipe";
  if (input.score < 1 || input.score > 100)
    errors.score = "The score must be a number between 1 and 100";
  if (input.healthScore < 1 || input.healthScore > 100)
    errors.healthScore = "The score must be a number between 1 and 100";
  if (!input.steps.length)
    errors.steps = "Please detail the steps for your recipe";
  if (!input.dietsTypes.length)
    errors.dietsTypes = "You must select at least one diet type";
  return errors;
}
 
function Formulario() {
  const dispatch = useDispatch();
  const dietTypes = useSelector((state) => state.dietsTypes);
  const [errors, setErrors] = useState({
  });

  const [input, setInput] = useState({
    name: "",
    summary: "",
    score: "",
    healthScore: "",
    steps: "",
    types: [],
  });
  useEffect(() => {
    dispatch(dietsType());
  }, [dispatch]);

function handleChange(event){
  event.preventDefault();
  setInput((prevInput)=>{
    const newInput ={
      ...prevInput,
      [event.target.name]:event.target.value
    }
    const validations = validate(newInput);
    setErrors(validations)
    return newInput
  });
}
function handleCheckBox(event) {
       
  let newArray = input.dietsTypes;
  let find = newArray.indexOf(event.target.value);
  
  if (find >= 0) {
      newArray.splice(find, 1)
  } else {
      newArray.push(event.target.value)
  }
  
  setInput({
      ...input,
      dietsTypes: newArray
  });
  const validations = validate(input);
  setErrors(validations)
  
}



function handleSubmit(event) {
  event.preventDefault();

  if (Object.values(errors).length > 0) {
      alert("Please complete the information required");
  } else if (
     input.name === '' && 
     input.summary === '' && 
     input.score === '' &&
     input.healthScore === '' &&
     input.steps === '' &&
     !input.dietTypes.length) {
     alert("Please complete the form");}
 else {
     dispatch(addRecipe(input));
     alert('New recipe added successfully!')
     setInput({
         name: "",
         summary: '',
         score: '',
         healthScore: '',
         steps: [],
         dietTypes: []
     });}
};



  useEffect(() => {
    dispatch(addRecipe());
  }, [dispatch]);  


  return (
    <div>
      <h1 className="msg">Creat your own recipe!</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form">
          <div className="prettierForm">
            <div className="nameInput">
              <label className="msgs">Name:</label>
              <input
                className="inputs"
                name="name"
                type="text"
                value={input.name}
                onChange={(e) => handleChange(e)}
              />
              {errors.name && <span className="errors">{errors.name}</span>}
            </div>
            <div className="nameInput">
              <label className="msgs">Summary:</label>
              <textarea
                name="summary"
                type="text"
                rows="4"
                cols="30"
                value={input.summary}
                onChange={(e) => handleChange(e)}
              />
              {errors.summary && (
                <span className="errors">{errors.summary}</span>
              )}
            </div>
            <div className="nameInput">
              <label className="msgs">Score:</label>
              <input
                name="score"
                type="number"
                value={input.score}
                onChange={(e) => handleChange(e)}
              />
              {errors.score && <span className="errors">{errors.score}</span>}
            </div>
            <div className="nameInput">
              <label className="msgs">Health Score:</label>
              <input
                name="healthScore"
                type="number"
                value={input.healthScore}
                onChange={(e) => handleChange(e)}
              />
              {errors.healthScore && (
                <span className="errors">{errors.healthScore}</span>
              )}
            </div>
            <div className="nameInput">
              <label className="msgs">Steps:</label>
              <textarea
                name="steps"
                type="text"
                rows="4"
                cols="40"
                value={input.steps}
                onChange={(e) => handleChange(e)}
              />
              {errors.steps && <span className="errors">{errors.steps}</span>}
            </div>
          </div>
          <div className="checkSelect">
            <label className="msgs">Diet Types:</label>
            {dietsType.map((d) => {
              return (
                <div key={d} className="checks">
                  <label className="dietTypes">{d}</label>
                  <input
                    className="checks"
                    type="checkbox"
                    name={d}
                    value={d}
                    selected={input.dietsType.includes(d)}
                    onChange={(e) => handleCheckBox(e)}
                  />
                </div>
              );
            })}
            {errors.dietsType && (
              <span className="errors">{errors.dietsType}</span>
            )}
          </div>
        </div>
        <button className="submitButton" type="submit">
          Submit Recipe
        </button>
        <Link to="/home">
          <button className="goBackButton">Go back</button>
        </Link>
      </form>
    </div>
  );
}

export default Formulario;
