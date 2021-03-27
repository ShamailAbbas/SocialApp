import React from "react";
import "../css/Login.css";
import logo from "../images/logo.PNG";
import Pagecontainer from "./Pagecontainer";
const Resetpassord = () => {
  return (
    <Pagecontainer>
      <div className="logincontainer">
        <img src={logo} alt="AreaGG" />
        <form className="form">
          <p className="title">Email</p>
          <input />
          <button className="resetbtn">Reset Password</button>
          <p className="checkinbox">
            Check your inbox to reset the password after subbmitting the email
          </p>
        </form>
      </div>
    </Pagecontainer>
  );
};

export default Resetpassord;
