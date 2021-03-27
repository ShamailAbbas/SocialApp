import { React } from "react";
import Feeds from "./components/Feeds.js";
import Navbar from "./components/Navbar.js";
import { Switch, Route, Redirect } from "react-router-dom";
import Upload from "./components/Upload.js";
import Landingpage from "./components/Landingpage.js";
import "./css/App.css";
import Timeline from "./components/Timeline.js";
import Addpost from "./components/Addpost.js";

import Resetpassord from "./components/Resetpassord.js";
import Profile from "./components/Profile.js";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/Signup">
          <Landingpage title="Signup" />
        </Route>
        <Route path="/Login">
          <Landingpage title="Login" />
        </Route>
        <Route path="/Passwordreset">
          <Resetpassord />
        </Route>
        <Route path="/Addpost">
          <Addpost />
        </Route>
        <Route path="/Timeline">
          <Timeline />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
        <Route path="/">
          <Landingpage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
