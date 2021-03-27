import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import logo from "../images/logo.PNG";
import pic from "../images/aaa.jpg";
import Search from "@material-ui/icons/Search";
const Navbar = () => {
  return (
    <div className="Nbcontainer">
      <img className="logo" src={logo} alt="AreaGG" />
      <div className="right">
        <Link to="/Signup">
          <div className="search">
            <input placeholder="Search User" />
            <Search />
          </div>
        </Link>
        {/* <Link to="/Signup">
          <p className="signup">Signup</p>
        </Link> */}
        <Link to="/Addpost">
          <p className="signup">Add Post</p>
        </Link>
        <Link to="/Timeline">
          <p className="signup">Timeline</p>
        </Link>
        <Link to="/Profile">
          <img className="user" src={pic} alt="" />
        </Link>
        <Link to="/Logout">
          <button className="logout">Logout</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
