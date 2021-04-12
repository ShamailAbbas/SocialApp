import React from "react";
import "../css/like.css";
import heart from "../images/heart.png";
const Like = ({ likes }) => {
  return (
    <div className="likediv">
      <img src={heart} alt="likes icon" />
      <p>
        {likes} {"  "}
        {likes > 1 ? "likes" : "like"}
      </p>
    </div>
  );
};

export default Like;
