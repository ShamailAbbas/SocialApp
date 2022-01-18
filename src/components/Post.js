import React from "react";
import "../css/post.css";
import url from "./url";
import { Link } from "react-router-dom";
import Singlecomment from "./Singlecomment";
import Getcomment from "./Getcomment";
import Like from "./Like";
import { connect } from "react-redux";

const Post = ({
  owner,
  post,
  profilepic,
  title,
  name,
  tag,
  createdat,
  desc,
  likes,
  comments,

  dispatch,
}) => {
  const fileName = post;
  const fileExtension = fileName?.split(".").pop();
  console.log("filetype is ", fileExtension);

  return (
    <div className="postcontainer">
      <div className="postheader">
        <img className="uploaderpic" src={profilepic} alt=" this is profile" />

        <div className="headerstyle">
          <div className="userinfo">
            <p className="username">{name}</p>
            <p className="usertags">{tag}</p>
            <p className="timestamp">posted on {createdat}</p>
          </div>

          <div>
            <Link to="/Viewprofile">
              <button
                onClick={() => {
                  dispatch({ type: "COUSERPROFILE", payload: owner });
                }}
                className="view"
              >
                VIEW
              </button>
            </Link>
          </div>
        </div>
      </div>
      {fileExtension === "jpg" ||
      fileExtension === "png" ||
      fileExtension === "jpeg" ||
      fileExtension === "PNG" ||
      fileExtension === "gif" ? (
        <>
          <img src={post} alt="this an post" className="post" />
        </>
      ) : (
        <video src={post} alt="this is postv" className="post" controls />
      )}
      <div className="postbottom">
        <Like likes={likes} />
        <p className="description">{title}</p>
        <p className="description">{desc}</p>

        <Singlecomment />

        <Getcomment comments={comments} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Post);
