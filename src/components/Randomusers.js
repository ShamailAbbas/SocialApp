import axios from "axios";
import React from "react";
import "../css/Randomusers.css";
import url from "./url";
const Randomusers = ({ profilepic, username, userid, refresh }) => {
  const user = JSON.parse(localStorage.getItem("currentuser"));
  const currentuser = user?._id;
  const follow = async (userid) => {
    const info = {
      whomtofollow: userid,
      follower: currentuser,
    };

    const follow = await axios.post(`${url}/follow/addfollower`, info);
    if (follow.data.success) {
      refresh(userid);
    }
  };

  return (
    <div className="randomusercontainer">
      <img
        className="randomuserpic"
        src={`${url}/${profilepic}`}
        alt="random users"
      />
      <h3 className="randomusertitle">{username}</h3>
      <button className="randomuserbutton" onClick={() => follow(userid)}>
        Follow
      </button>
    </div>
  );
};

export default Randomusers;
