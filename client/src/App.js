import {Home,Detail,Landing ,Form} from "./views";      
import {Route,useLocation} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";


function App() {
  return (
    <div> 
 {useLocation().pathname !== "/" && <NavBar/>}
      <Route exact  path = "/"><Landing /></Route>
      <Route path ="/Home">  <Home  /></Route>

      <Route path= "/Detail"><Detail /></Route>


      <Route path = "/Create" render = {()=><Form/>}/>
    </div>
  );
}

export default App;
