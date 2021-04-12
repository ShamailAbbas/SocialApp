import React, { useState } from "react";
import "../css/singlecomment.css";
import axios from "axios";
import url from "./url";
const Singlecomment = ({ postid }) => {
  const [comment, setcomment] = useState("");
  const Addcomment = async () => {
    const commentdata = {
      writer: localStorage.getItem("userid"),
      postId: postid,
      content: comment,
    };
    const response = await axios.post(
      `${url}/comment/saveComment`,
      commentdata
    );
    console.log("response is", response.data.result);
  };

  return (
    <div>
      <input
        className="commentfield"
        type="text"
        placeholder="Add a Comment"
        value={comment}
        onChange={(e) => setcomment(e.target.value)}
      />
      {comment ? (
        <>
          <button className="cmntbtn" onClick={() => Addcomment()}>
            Send
          </button>
          <button className="cmntbtn" onClick={() => setcomment("")}>
            Cancel
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Singlecomment;
