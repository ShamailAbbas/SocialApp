import React from "react";
import "../css/postimages.css";
const Postimages = ({ image, video }) => {
  return (
    <div className="postwrapper">
      <img src={image} alt="this an post" />
    </div>
  );
};

export default Postimages;
