import React, { useEffect, useState } from "react";
import axios from "axios";
import url from "./url";
import Postcontainer from "./Pagecontainer";
import "../css/profile.css";
import Postimages from "./Postimages";
import Model from "./Model";
import paratha from "../images/hotelimage.jpg";
import Header from "./Header";
import { connect } from "react-redux";

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
const Profile = ({ showmodel, dispatch }) => {
  const user = JSON.parse(localStorage.getItem("currentuser"));
  const [Stats, setStats] = useState("");
  const getuserinfo = async () => {
    const userid = {
      userid: user._id,
    };
    console.log(userid);
    const userdata = await axios.post(`${url}/post/getuserinfo`, userid);
    setStats(userdata.data);
  };
  useEffect(() => {
    getuserinfo();
  }, []);
  return (
    <div className="profilecontainer">
      <Header stats={Stats}>
        <button
          className="editprofile"
          onClick={() => dispatch({ type: "SHOWMODEL" })}
        >
          Edit Profile
        </button>
      </Header>
      {showmodel ? (
        <>
          <Model />
        </>
      ) : (
        ""
      )}
      <div className="postimages">
        {Posts?.map((post, index) => {
          return (
            <Postimages key={index} image={post.image} video={post.video} />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showmodel: state.showmodel,
  };
};

export default connect(mapStateToProps)(Profile);
