import React from "react";
import "../css/Resetpassword.css";
import logo from "../images/Logo.SVG";
import Pagecontainer from "./Pagecontainer";
const Resetpassord = () => {
  return (
    <Pagecontainer>
      <div className="resetcontainer">
        <img src={logo} alt="AreaGG" />
        <form className="resetform">
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
