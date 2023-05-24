import {Home,Landing ,Form,Detail} from "./views";      
import {Route,useLocation} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001/'

function App() {
  return (
    <div> 
 {useLocation().pathname !== "/" && <NavBar/>}
      <Route exact  path = "/"><Landing /></Route>
      <Route path ="/Home">  <Home  /></Route>

      <Route path= "/Detail/:id"><Detail /></Route>


      <Route path = "/Create" render = {()=><Form/>}/>
    </div>
  );
}

export default App;
