import React, { useState } from "react";
import ReactDom from "react-dom";
import url from "./url";
import "../css/model.css";
import { connect } from "react-redux";
import axios from "axios";
const Model = ({ showmodel, dispatch }) => {
  const user = JSON.parse(localStorage.getItem("currentuser"));
  const [name, setname] = useState(user.name);
  const [email, setemail] = useState(user.email);
  const [tag, settag] = useState(user.tag);
  const updatefc = async (e) => {
    e.preventDefault();
    const userdata = {
      userid: user._id,
      name,
      email,
      tag,
    };
    const update = await axios.post(`${url}/user/update`, userdata);
    console.log("update response is >>>>>>>", update.data);
    if (update.data.success) {
      alert("update successfully please log in again to see the changes");
      dispatch({ type: "SHOWMODEL" });
    } else {
      alert("update failed");
    }
  };
  return ReactDom.createPortal(
    <>
      <div className="modelbg">
        <div className="model">
          <div className="editprofilecontainer">
            <p className="editprofileheading">Edit Profile</p>
            <form
              className="editprofileform"
              onSubmit={(e) => updatefc(e)}
              encType="multipart/form-data"
            >
              <p className="editname">Name</p>
              <input
                value={name}
                type="text"
                name="title"
                required={true}
                onChange={(e) => setname(e.target.value)}
              />
              <p className="editname">Email</p>
              <input
                value={email}
                type="text"
                name="desc"
                required={true}
                onChange={(e) => setemail(e.target.value)}
              />
              <p className="editname">Tag</p>
              <input
                value={tag}
                type="text"
                name="desc"
                required={true}
                onChange={(e) => settag(e.target.value)}
              />

              <button type="submit" className="editprofilebtn">
                Submit
              </button>
            </form>
            <button
              className="editprofilecancelbtn"
              onClick={() => dispatch({ type: "SHOWMODEL" })}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

const mapStateToProps = (state) => {
  return {
    showmodel: state.showmodel,
  };
};

export default connect(mapStateToProps)(Model);
