import React from "react";
import { Link } from "react-router-dom";
import "../css/Login.css";
const Authpage = ({ children, title, logo }) => {
  return (
    <div className="logincontainer">
      <p className="login">{title}</p>
      <form className="form">
        {title == "Signup" ? (
          <>
            <p className="title">Full Name</p>
            <input />
          </>
        ) : (
          ""
        )}
        <p className="title">Email</p>
        <input />
        <p className="title">Password</p>
        <input /> {children}
        {title == "Login" ? (
          <Link to="/Passwordreset">
            <p className="forget">Forgot password?</p>{" "}
          </Link>
        ) : (
          ""
        )}
        <button className="getin">Get In</button>
        {title == "Login" ? (
          <Link to="/Signup">
            <p className="noaccount">Don't have an account?</p>
          </Link>
        ) : (
          <Link to="/Login">
            <p className="noaccount">Already have an account?</p>
          </Link>
        )}
      </form>
    </div>
  );
};

export default Authpage;
