import { React } from "react";
import Navbar from "./components/Navbar.js";
import { Switch, Route, Redirect } from "react-router-dom";

import Landingpage from "./components/Landingpage.js";
import "./css/App.css";
import Timeline from "./components/Timeline.js";
import Addpost from "./components/Addpost.js";

import Resetpassord from "./components/Resetpassord.js";
import Profile from "./components/Profile.js";
import Viewprofile from "./components/Couserprofile.js";

function App() {
  const user = localStorage.getItem("currentuser");
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/Signup">
          {user ? <Redirect to="/" /> : <Landingpage title="Signup" />}
        </Route>
        <Route path="/Login">
          {user ? <Redirect to="/" /> : <Landingpage title="Login" />}
        </Route>
        <Route path="/Passwordreset">
          <Resetpassord />
        </Route>
        <Route path="/Addpost">
          {user ? <Addpost /> : <Landingpage title="Login" />}
        </Route>

        <Route path="/Timeline">
          {user ? <Timeline /> : <Redirect to="/Login" />}
        </Route>
        <Route path="/Viewprofile">
          {user ? <Viewprofile /> : <Redirect to="/Login" />}
        </Route>

        <Route path="/Profile">
          {user ? <Profile /> : <Redirect to="/Login" />}
        </Route>

        <Route path="/">{user ? <Timeline /> : <Redirect to="/Login" />}</Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
