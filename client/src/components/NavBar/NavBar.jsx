import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
function NavBar() {
  return (
    <div className={style.navbar}>
      <a href="#" className={style.item} is-active color="orange">
        <Link to="/Home">HOME</Link>
      </a>
      <a className={style.item}>
        <Link to="/Create">FORM</Link>
      </a>
      <a className={style.item} color="orange">
        <Link to="/Detail"> DETAIL</Link>
      </a>
      <span className={style.indicador}></span>
    </div>
  );
}

export default NavBar;
