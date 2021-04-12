import React, { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";
import url from "./url";
import "../css/timeline.css";

import Randomusers from "./Randomusers";

const Timeline = () => {
  const user = JSON.parse(localStorage.getItem("currentuser"));
  const currentuser = { currentuser: user?._id };

  const [posts, setposts] = useState([]);
  const [Randomuser, setRandomuser] = useState([]);
  const getposts = async () => {
    const res = await axios.post(`${url}/post/getposts`, currentuser);

    setposts(res.data.posts);
  };
  const getrandomposts = async () => {
    const res = await axios.post(`${url}/post/getrandomposts`, currentuser);

    setRandomuser(res.data.users);
  };

  const refresh = (userid) => {
    console.log("user id is ", userid);
    const users = Randomuser.filter((users) => users.owner._id !== userid);

    setRandomuser(users);
  };

  useEffect(() => {
    getposts();
    getrandomposts();
  }, []);
  return (
    <div className="timelinepagecontainerdiv">
      <div className="bgimage"></div>

      <div className="timelinewrapperdiv">
        <div className="randomusersection">
          {Randomuser?.map((randomusers, index) => {
            return (
              <Randomusers
                key={index}
                profilepic={randomusers.owner.profilepic}
                userid={randomusers.owner._id}
                username={randomusers.owner.email}
                refresh={refresh}
              />
            );
          })}
        </div>

        <div style={{ marginTop: "222px" }}>
          {posts?.map((post, index) => {
            return (
              <Post
                key={index}
                post={post.post.postpath}
                posttype={post.posttype}
                profilepic={post.owner.profilepic}
                title={post.post.title}
                desc={post.post.desc}
                likes={post.likes}
                createdat={post.post.createdAt}
                comments={post.comments}
                name={post.owner.name}
                tag={post.owner.tag}
                owner={post.owner}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
