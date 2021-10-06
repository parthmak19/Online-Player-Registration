import './App.css';
import Signup from "./components/Signup/Signup.js";
import Login from "./components/Login/Login.js";
import Registration_cod from "./components/Registration/Registration_cod.js";
import Registration_CS from "./components/Registration/Registration_CS.js";
import Contactus from "./components/Contactus/Contactus.js";
import Homepage from "./components/Homepage/Homepage.js";
import Aboutus from "./components/Aboutus/Aboutus.js";
import Logout from "./components/Logout/Logout.js";
import Error from "./components/Error/Error.js";


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//import { useState } from 'react';

function App() {

 // const [user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path ="/"><Homepage/></Route>
          <Route exact path = "/login"><Login/></Route>
          <Route exact path = "/signup"><Signup/></Route>
          <Route exact path = "/registration_cod"><Registration_cod/></Route>
          <Route exact path = "/registration_cs"><Registration_CS/></Route>
          <Route exact path = "/contactus"><Contactus/></Route>
          <Route exact path = "/aboutus"><Aboutus/></Route>
          <Route exact path = "/logout"><Logout/></Route>
          <Route><Error/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
