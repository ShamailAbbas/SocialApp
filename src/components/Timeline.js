import React from "react";
import Pagecontainer from "./Pagecontainer";
import Post from "./Post";
import paratha from "../images/hotelimage.jpg";
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
const Timeline = () => {
  return (
    <Pagecontainer>
      <div>
        {Posts?.map((post) => {
          return (
            <Post
              image={post.image}
              video={post.video}
              title={post.title}
              desc={post.desc}
              likes={post.likes}
              comments={post.comments}
              name={post.name}
              tag={post.name}
            />
          );
        })}
      </div>
    </Pagecontainer>
  );
};

export default Timeline;
