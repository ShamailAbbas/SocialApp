import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../css/navbar.css";
import logo from "../images/Logo.SVG";
import axios from "axios";
import Search from "@material-ui/icons/Search";
import url from "./url";
const Navbar = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("currentuser"));
  const profilepic = user?.profilepic;
  const [search, setsearch] = useState("");

  const searchfc = async (e) => {
    e.preventDefault();
    const data = {
      search,
    };

    const res = await axios.post(`${url}/search/searchusers`, data);
    console.log("search response is >>", res.data);
  };
  return (
    <div className="Nbcontainer">
      <img
        className="logo"
        src={logo}
        alt="AreaGG"
        onClick={() => history.push("/")}
      />
      <div className="right">
        {user ? (
          <div className="search">
            <input
              placeholder="Search User"
              value={search}
              type="text"
              name="search"
              required={true}
              onChange={(e) => setsearch(e.target.value)}
            />
            <Search onClick={(e) => searchfc(e)} />
          </div>
        ) : (
          ""
        )}

        {!user || user === "null" || user === "undefined" ? (
          <Link to="/Signup">
            <p className="signup">Signup</p>
          </Link>
        ) : (
          <>
            <Link to="/Addpost">
              <p className="navbaritems">Add Post</p>
            </Link>
            <Link to="/Timeline">
              <p className="navbaritems">Timeline</p>
            </Link>
            <Link to="/Profile">
              <img
                className="user"
                src={`${url}/${profilepic}`}
                alt="this is profile"
              />
            </Link>
            <Link to="/Logout">
              <button
                className="logout"
                onClick={() => {
                  localStorage.clear();
                  window.location.replace("http://localhost:3000/");
                }}
              >
                Logout
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
