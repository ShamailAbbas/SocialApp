import React, { useState } from "react";
import "../css/getcomment.css";

const Getcomment = ({ comments }) => {
  const [showcomments, setshowcomments] = useState(false);
  const fetchdata = async () => {
    setshowcomments(!showcomments);
  };

  return (
    <div className="commentsection">
      <button
        className="showhidebtn"
        onClick={() =>
          !showcomments ? fetchdata() : setshowcomments(!showcomments)
        }
      >
        {showcomments ? "Hide Comments" : "Show Comments"}
      </button>
      <div className="commentcontainer">
        {showcomments ? (
          comments ? (
            comments?.map((comment) => {
              return (
                <div className="singlecommentdiv">
                  <img src={comment.commentwriter} alt="thsi is a pic" />
                  <p>{comment.content}</p>
                </div>
              );
            })
          ) : (
            <p>No comment on this post</p>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Getcomment;
