import React from "react";
import "../css/Tag.css";
const Tag = ({ title }) => {
  return (
    <button className="tag">
      {title === "Login"
        ? "Build Your Gaming Network"
        : "Community To Connect Gamers"}
    </button>
  );
};

export default Tag;
