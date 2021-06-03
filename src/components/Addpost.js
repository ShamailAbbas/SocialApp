import React, { useState } from "react";
import Image from "@material-ui/icons/FilterFrames";
import "../css/Addpost.css";
import Pagecontainer from "./Pagecontainer";
import axios from "axios";
import url from "./url";
import lines from "../images/lines.SVG";
import joystick from "../images/joystick.SVG";
const Addpost = () => {
  const user = JSON.parse(localStorage.getItem("currentuser"));
  const owner = user?._id;
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [file, setfile] = useState("");

  const uploadfc = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("file", file);
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("owner", owner);
    const res = await axios.post(`${url}/post/addpost`, formData);
    console.log(res.data.success);
    if (res.data.success) {
      alert("uploaded successfully");
    } else {
      alert("uploaded failed please retry");
    }
  };
  return (
    <Pagecontainer>
      <img className="linesone" src={lines} alt="this is a line" />
      <div>
        <img className="joystick" src={joystick} alt="this is a joystick" />
      </div>

      <div className="addpostcontainer">
        <p className="newpost">New Post</p>

        <form
          className="uploadform"
          onSubmit={(e) => uploadfc(e)}
          encType="multipart/form-data"
        >
          <p className="title">Post Title</p>
          <input
            value={title}
            type="text"
            name="title"
            required={true}
            onChange={(e) => settitle(e.target.value)}
          />
          <p className="title">Description</p>
          <input
            value={desc}
            type="text"
            name="desc"
            required={true}
            onChange={(e) => setdesc(e.target.value)}
          />
          <input
            className="inputfile"
            type="file"
            id="file"
            name="file"
            accept=".png, .jpg, .jpeg, .mp4"
            required={true}
            onChange={(e) => setfile(e.target.files[0])}
          />

          <label htmlFor="file" className="selectfile">
            <Image className="imageicon" />
            <p> Upload Image or Video of 1min</p>
          </label>
          <button type="submit" className="submitbtn">
            Submit
          </button>
        </form>
      </div>
      <img className="linestwo" src={lines} alt="this is a line" />
    </Pagecontainer>
  );
};

export default Addpost;
