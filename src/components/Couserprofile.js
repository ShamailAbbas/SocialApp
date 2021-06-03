import React, { useEffect, useState } from "react";
import "../css/profile.css";
import Postimages from "./Postimages";

import paratha from "../images/hotelimage.jpg";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import url from "./url";

const Posts = [
  {
    image: paratha,
    title: "this is paratha",
    desc: "ghg hjjhg hjbjhj bjhgjhghj jhghjhgj hjhgjhgjh gjhgjhgjh jhgjhg",
    likes: "1",
    comment: "ghhhj jhsdhkjshd shadkjshkjd shdkjdshd",
    name: "Vikram kumar",
    tag: "Pubg Gamer",
  },
  {
    image: paratha,
    title: "this is paratha",
    desc: "ghg hjjhg hjbjhj bjhgjhghj jhghjhgj hjhgjhgjh gjhgjhgjh jhgjhg",
    likes: "1",
    comment: "ghhhj jhsdhkjshd shadkjshkjd shdkjdshd",
    name: "Vikram kumar",
    tag: "Pubg Gamer",
  },
  {
    image: paratha,
    title: "this is paratha",
    desc: "ghg hjjhg hjbjhj bjhgjhghj jhghjhgj hjhgjhgjh gjhgjhgjh jhgjhg",
    likes: "1",
    comment: "ghhhj jhsdhkjshd shadkjshkjd shdkjdshd",
    name: "Vikram kumar",
    tag: "Pubg Gamer",
  },
  {
    image: paratha,
    title: "this is paratha",
    desc: "ghg hjjhg hjbjhj bjhgjhghj jhghjhgj hjhgjhgjh gjhgjhgjh jhgjhg",
    likes: "1",
    comment: "ghhhj jhsdhkjshd shadkjshkjd shdkjdshd",
    name: "Vikram kumar",
    tag: "Pubg Gamer",
  },
  {
    image: paratha,
    title: "this is paratha",
    desc: "ghg hjjhg hjbjhj bjhgjhghj jhghjhgj hjhgjhgjh gjhgjhgjh jhgjhg",
    likes: "1",
    comment: "ghhhj jhsdhkjshd shadkjshkjd shdkjdshd",
    name: "Vikram kumar",
    tag: "Pubg Gamer",
  },
  {
    image: paratha,
    title: "this is paratha",
    desc: "ghg hjjhg hjbjhj bjhgjhghj jhghjhgj hjhgjhgjh gjhgjhgjh jhgjhg",
    likes: "1",
    comment: "ghhhj jhsdhkjshd shadkjshkjd shdkjdshd",
    name: "Vikram kumar",
    tag: "Pubg Gamer",
  },
  {
    image: paratha,
    title: "this is paratha",
    desc: "ghg hjjhg hjbjhj bjhgjhghj jhghjhgj hjhgjhgjh gjhgjhgjh jhgjhg",
    likes: "1",
    comment: "ghhhj jhsdhkjshd shadkjshkjd shdkjdshd",
    name: "Vikram kumar",
    tag: "Pubg Gamer",
  },
  {
    image: paratha,
    title: "this is paratha",
    desc: "ghg hjjhg hjbjhj bjhgjhghj jhghjhgj hjhgjhgjh gjhgjhgjh jhgjhg",
    likes: "1",
    comment: "ghhhj jhsdhkjshd shadkjshkjd shdkjdshd",
    name: "Vikram kumar",
    tag: "Pubg Gamer",
  },
];

const Viewprofile = ({ couserdata }) => {
  const user = JSON.parse(localStorage.getItem("currentuser"));
  const [Stats, setStats] = useState("");
  const getuserinfo = async () => {
    const userids = {
      userid: user._id,
      couserid: couserdata._id,
    };
    console.log(userids);
    const userdata = await axios.post(`${url}/post/getuserinfo`, userids);
    setStats(userdata.data);
  };
  useEffect(() => {
    getuserinfo();
  }, []);

  return (
    <div className="profilecontainer">
      <Header renderingon="couserprofile" couserdata={couserdata} stats={Stats}>
        <button className="editprofile">
          {Stats.amifollowing === "0" ? "Follow" : "Unfollow"}
        </button>
        <button className="editprofile">Message</button>
      </Header>
      <div className="postimages">
        {Posts?.map((post) => {
          return <Postimages image={post.image} video={post.video} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    couserdata: state.couserdata,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Viewprofile);
