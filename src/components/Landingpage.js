import React from "react";
import Bg1 from "../images/Bg1.SVG";
import "../css/Landingpage.css";
import Authpage from "./Authpage";
import Tag from "./Tag";

const Landingpage = ({ title }) => {
  return (
    <div className="landingpage">
      <img className="backgroundimage" src={Bg1} alt="background " />
      {title === "Signup" ? (
        <div className="tagline">
          <p>
            Grow Your Organic audience and create impact of your <br></br>
            presence on this plateform.
          </p>
        </div>
      ) : (
        ""
      )}

      <Authpage title={title} />

      <div className="tagbtn">
        <Tag title={title} />
      </div>
    </div>
  );
};

export default Landingpage;
