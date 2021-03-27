import React from "react";
import Image from "@material-ui/icons/Image";
import "../css/Login.css";
import Pagecontainer from "./Pagecontainer";
const Addpost = () => {
  return (
    <Pagecontainer>
      <div className="logincontainer">
        <p className="login">New Post</p>
        <form className="form">
          <p className="title">Post Title</p>
          <input />
          <p className="title">Post Description</p>
          <input />
          <p className="title">Password</p>
          <input />
          <div className="profilepic">
            <Image />
            <p>Upload Image or Video of 1min</p>
          </div>

          <button className="getin">Submit</button>
        </form>
      </div>
    </Pagecontainer>
  );
};

export default Addpost;
