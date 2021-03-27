import React from "react";
import "../css/post.css";
const Post = ({ image, video, title, name, tag, desc, likes, comments }) => {
  return (
    <div className="postcontainer">
      <div className="postheader">
        <img className="profilepic" src={image} alt="image" />

        <div className="headerstyle">
          <div className="userinfo">
            <h3>{name}</h3>
            <p>{tag}</p>
          </div>
          <div>
            {" "}
            <button className="view">View</button>
          </div>
        </div>
      </div>
      {image ? (
        <img src={image} alt="image" className="post" />
      ) : (
        <video src={video} alt="video" className="post" />
      )}
      <div className="postbottom">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div>
          {likes} {"  "} Likes
        </div>
        <div>{comments}</div>
      </div>
    </div>
  );
};

export default Post;
