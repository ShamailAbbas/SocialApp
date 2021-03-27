import React from "react";
import Navbar from "./Navbar";
import "../css/Landingpage.css";
import Authpage from "./Authpage";
import Tag from "./Tag";
import Image from "@material-ui/icons/Image";
import Resetpassord from "./Resetpassord";
const Landingpage = ({ title, logo }) => {
  return (
    <div className="landingpage">
      {/* <Navbar /> */}
      <div className="loginsection">
        {title == "Login" ? (
          <Authpage title="Login" />
        ) : (
          <Authpage title="Signup">
            <div className="profilepic">
              <Image />
              <p>Upload Profile Pic</p>
            </div>
          </Authpage>
        )}
      </div>
      <div className="tagbtn">
        <Tag />
      </div>
    </div>
  );
};

export default Landingpage;
