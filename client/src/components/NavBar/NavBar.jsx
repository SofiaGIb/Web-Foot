import {Link} from "react-router-dom"
import style from "./NavBar.module.css"
function NavBar() {
  return (
    <div className={style.mainContainer}>
      <Link to="/Home">HOME</Link>
      <Link to="/Create">FORM</Link>
      <Link to = "/Detail"> DETAIL</Link>
    </div>
  )
}

export default NavBar
