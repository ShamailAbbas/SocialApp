import React from "react";
import "../css/header.css";
import Image from "@material-ui/icons/AddAPhoto";
import Youtube from "../images/youtube.SVG";
import Gmail from "../images/gmail.SVG";
import Game from "../images/game.SVG";
import Twitter from "../images/twitter.SVG";
import url from "./url";
const Header = ({ renderingon, couserdata, stats, children }) => {
  const user = JSON.parse(localStorage.getItem("currentuser"));
  const profilepic = user?.profilepic;
  return (
    <div className="header">
      <div className="profileleft">
        <div className="outercircle">
          <div className="innercircle">
            {renderingon === "couserprofile" ? (
              <img
                className="profilepicture"
                src={`${url}/${couserdata.profilepic}`}
                alt="this is profile pic"
              />
            ) : (
              <img
                className="profilepicture"
                src={`${url}/${profilepic}`}
                alt="this is profile pic"
              />
            )}
          </div>
        </div>
        {renderingon === "couserprofile" ? (
          ""
        ) : (
          <>
            <input
              className="inputfile"
              type="file"
              id="file"
              name="file"
              accept=".png, .jpg, .jpeg, .mp4"
              required={true}
            />

            <label for="file" className="selectfile">
              <Image className="imageicon" />
              <p> Change profile picture</p>
            </label>
          </>
        )}
      </div>
      <div className="infocenter">
        {renderingon === "couserprofile" ? (
          <>
            <h3>{couserdata.name}</h3>
            <p>{couserdata.tag}</p>
          </>
        ) : (
          <>
            <h3>{user.name}</h3>
            <p>{user.tag}</p>
          </>
        )}

        <div class="stats">
          <p className="userstats">{stats.posts} posts</p>
          <p className="userstats"> {stats.followers} followers</p>
          <p className="userstats">{stats.following} following</p>
        </div>
        {children}
      </div>
      <div className="rightsection">
        <img src={Gmail} alt="this is gmail icon" />
        <img src={Youtube} alt="this is gmail icon" />
        <img src={Twitter} alt="this is gmail icon" />
        <img src={Game} alt="this is gmail icon" />
      </div>
    </div>
  );
};

export default Header;
