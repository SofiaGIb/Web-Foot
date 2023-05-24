import style from "./formulario.module.css";
import { addRecipe, dietsType } from "../../Redux/actions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
const axios = require("axios");

function validate(form) {
  const errors = {};
  if (!form.Name) errors.Name = "Please complete with a recipe name";
  if (!form.Summary)
    errors.Summary = "Please add some comments about your recipe";
  if (form.Score < 1 || form.Score > 100)
    errors.Score = "The score must be a number between 1 and 100";
  if (form.Health_score < 1 || form.Health_score > 100)
    errors.Health_scoree = "The score must be a number between 1 and 100";
  if (!form.Steps)
    errors.Steps = "Please detail the steps for your recipe";
  if (!form.dietsTypes)
    errors.dietsTypes = "You must select at least one diet type";
  return errors;
}

function Formulario() {
  const dispatch = useDispatch();
  const dietsTypes = useSelector((state) => state.dietsTypes);
  const [errors, setErrors] = useState({
    Name: "",
    Summary: "",
    Score: "",
    Health_score: "",
    Steps: "",
    Image: " ",
    dietsTypes: [],

  });
  const [form, setForm] = useState({
    Name: "",
    Summary: "",
    Score: "",
    Health_score: "",
    Steps: "",
    Image: " ",
    dietsTypes: [],
  });

  useEffect(() => {
//    if (dietsTypes.length === 0) {
     dispatch(dietsType());
   // }
  }, [dispatch, dietsTypes]);

  function handleChange(event) {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    setErrors(validate({ ...errors, [property]: value }));
  }
  function handletype(event) {
    setForm({ ...form, dietsTypes: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      form.Name &&
      form.Summary &&
      form.Steps &&
      form.dietsTypes &&
      form.Score
    ) {
      dispatch(addRecipe(form));
    }
  }

  useEffect(() => {
    dispatch(addRecipe());
  }, [dispatch]);

  return (
    <div className={style.addRecipe}>
      <form>
        <h1 className={style.title}>Creat your own recipe!</h1>
        <div className={style.form}>
          <div className={style.prettierForm}>
            <div className={style.nameform}>
              <label className={style.msgs}>Name:</label>
              <input
                className={style.forms}
                name="Name"
                type="text"
                value={form.Name}
                onChange={(event) => handleChange(event)}
              />
              {errors.Name && (
                <span className={style.errors}>{errors.Name}</span>
              )}
            </div>
            <div className={style.nameform}>
              <label className={style.msgs}>Summary:</label>
              <textarea
                className={style.forms}
                name="Summary"
                type="text"
                rows="4"
                cols="30"
                value={form.Summary}
                onChange={(event) => handleChange(event)}
              />
              {errors.Summary && (
                <span className={style.errors}>{errors.Summary}</span>
              )}
            </div>
            <div className={style.nameform}>
              <label className={style.msgs}>Score:</label>
              <input
                className={style.forms}
                name="Score"
                type="number"
                value={form.Score}
                onChange={(event) => handleChange(event)}
              />
              {errors.Score && (
                <span className={style.errors}>{errors.Score}</span>
              )}
            </div>
            <div className={style.nameform}>
              <label className={style.msgs}>Health Score:</label>
              <input
                className={style.forms}
                name="Health_score"
                type="number"
                value={form.Health_score}
                onChange={(event) => handleChange(event)}
              />
              {errors.Health_score && (
                <span className={style.errors}>{errors.Health_score}</span>
              )}
            </div>
            <div className={style.nameform}>
              <label className={style.msgs}>Steps:</label>
              <textarea
                className={style.forms}
                name="Steps"
                type="text"
                rows="4"
                cols="40"
                value={form.Steps}
                onChange={(event) => handleChange(event)}
              />
              {errors.Steps && (
                <span className={style.errors}>{errors.Steps}</span>
              )}
            </div>

            <div>
              <label htmlFor="Image" className={style.msgs}>
                Link imagen
              </label>
              <input
                className={style.forms}
                type="text"
                name="Image"
                value={form.Image}
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div>
              <label className={style.msgs}>Diet Types:</label>
              <select onChange={(event)=>handletype(event)}>
                <option value="-">TYPE DIETS</option>
                {dietsTypes.map((type) => (
                  <option value={type.name} key={type.id}>
                    {type.name}
                  </option>
                ))}
                {errors.dietsTypes && (
                  <span className={style.errors}>{errors.dietsTypes}</span>
                )}
              </select>
            </div>
          </div>
        </div>
        <button
          className={style.submitButton}
          type="submit"
          onClick={(event) => handleSubmit(event)}
        >
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
