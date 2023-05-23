import style from "./formulario.module.css";
import { addRecipe, dietsType } from "../../Redux/actions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
const axios = require ('axios');
 

function validate(form) {
  const errors = {};
  if (!form.name) errors.name = "Please complete with a recipe name";
  if (!form.summary)
  errors.summary = "Please add some comments about your recipe";
  if (form.score < 1 || form.score > 100)
  errors.score = "The score must be a number between 1 and 100";
  if (form.healthScore < 1 || form.healthScore > 100)
  errors.healthScore = "The score must be a number between 1 and 100";
  if (!form.steps.length)
  errors.steps = "Please detail the steps for your recipe";
  if (!form.dietsTypes.length)
  errors.dietsTypes = "You must select at least one diet type";
  return errors;
}

function Formulario() {
  const dispatch = useDispatch();
  const dietsTypes = useSelector((state) => state.dietsTypes);
  const [errors, setErrors] = useState({});
  
  const [form, setForm] = useState({
    name: "",
    summary: "",
    score: "",
    healthScore: "",
    steps: "",
    image : " ",
    dietsTypes: [],
  });
  useEffect(() => {
    dispatch(dietsType());
  }, [dispatch]);

  function handleChange(event) {
    setForm((prevform) => {
      const newform = {
        ...prevform,
        [event.target.name]: event.target.value,
      };
      const validations = validate(newform);
      setErrors(validations);
      return newform;
    });
  }
  function handleCheckBox(event) {
    let newArray = form.dietsTypes;
    let find = newArray.indexOf(event.target.value);

    if (find >= 0) {
      newArray.splice(find, 1);
    } else {
      newArray.push(event.target.value);
    }

    setForm({
      ...form,
      dietsTypes: newArray,
    });
    const validations = validate(form);
    setErrors(validations);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (Object.values(errors).length > 0) {
      alert("Please complete the information required");
    } else if (
      form.name === "" &&
      form.summary === "" &&
      form.score === "" &&
      form.healthScore === "" &&
      form.steps === "" &&
      !form.dietsTypes.length
    ) {
      alert("Please complete the form");
    } else {
     const createrecipe = axios.post('/Recipe',form)
       
//dispatch(addRecipe(form));
       alert("New recipe added successfully!");
      setForm({
        name: "",
        summary: "",
        image :"",
        score: "",
        healthScore: "",
        steps: [],
        dietTypes: [],
      });
    }
  }

  useEffect(() => {
    dispatch(addRecipe());
  }, [dispatch]);

  return (
    <div className={style.addRecipe}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1 className={style.title}>Creat your own recipe!</h1>
        <div className={style.form}>
          <div className={style.prettierForm}>
            <div className={style.nameform}>
              <label className={style.msgs}>Name:</label>
              <input
                className={style.forms}
                name="name"
                type="text"
                value={form.name}
                onChange={(e) => handleChange(e)}
              />
              {errors.name && (
                <span className={style.errors}>{errors.name}</span>
              )}
            </div>
            <div className={style.nameform}>
              <label className={style.msgs}>Summary:</label>
              <textarea
                className={style.forms}
                name="summary"
                type="text"
                rows="4"
                cols="30"
                value={form.summary}
                onChange={(e) => handleChange(e)}
              />
              {errors.summary && (
                <span className={style.errors}>{errors.summary}</span>
              )}
            </div>
            <div className={style.nameform}>
              <label className={style.msgs}>Score:</label>
              <input
                className={style.forms}
                name="score"
                type="number"
                value={form.score}
                onChange={(e) => handleChange(e)}
              />
              {errors.score && (
                <span className={style.errors}>{errors.score}</span>
              )}
            </div>
            <div className={style.nameform}>
              <label className={style.msgs}>Health Score:</label>
              <input
                className={style.forms}
                name="healthScore"
                type="number"
                value={form.healthScore}
                onChange={(e) => handleChange(e)}
              />
              {errors.healthScore && (
                <span className={style.errors}>{errors.healthScore}</span>
              )}
            </div>
            <div className={style.nameform}>
              <label className={style.msgs}>Steps:</label>
              <textarea
                className={style.forms}
                name="steps"
                type="text"
                rows="4"
                cols="40"
                value={form.steps}
                onChange={(e) => handleChange(e)}
              />
              {errors.steps && (
                <span className={style.errors}>{errors.steps}</span>
              )}
            </div>

            <div>
              <label htmlFor="image" className={style.msgs}>
                Link imagen
              </label>
              <input
                className={style.forms}
                type="text"
                name="image"
                value={form.image}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div >
              <label className={style.msgs}>Diet Types:</label>
              {dietsTypes.map((d) => {
                return (
                  <div key={d} className={style.checks}>
                    <label className={style.dietTypes}>{d}</label>
                    <input
                      type="text"
                      name={d}
                      value={d}
                      selected={form.dietsTypes.includes(d)}
                      onChange={(e) => handleCheckBox(e)}
                    />
                  </div>
                );
              })}
              {errors.dietsType && (
                <span className={style.errors}>{errors.dietsType}</span>
              )}
            </div>
          </div>
        </div>
        <button className={style.submitButton} type="submit">
          Submit Recipe
        </button>
        <Link to="/home">
          <button className={style.goBackButton}>Go back</button>
        </Link>
      </form>
    </div>
  );
}

export default Formulario;
