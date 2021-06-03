import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Auth.css";
import Image from "@material-ui/icons/PhotoFilter";
import { Authfc } from "../utils/auth.js";
const Authpage = ({ title }) => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [profilepic, setprofilepic] = useState("");
  console.log("auth page rendered");

  const handleSubmit = (e, title) => {
    if (title === "Login") {
      const formData = {
        email: email,
        password: password,
      };
      Authfc(e, title, formData);
    }
    if (title === "Signup") {
      const formData = new FormData();
      formData.append("profilepic", profilepic);
      formData.append("email", email);
      formData.append("name", username);
      formData.append("password", password);
      Authfc(e, title, formData);
    }
  };
  return (
    <div className="logincontainer">
      <p className="login">{title}</p>

      <form
        className="form"
        onSubmit={(e) => handleSubmit(e, title)}
        encType="multipart/form-data"
      >
        {title === "Signup" ? (
          <>
            <p className="title">Full Name</p>
            <input
              value={username}
              required={true}
              type="text"
              name="name"
              onChange={(e) => setusername(e.target.value)}
            />
          </>
        ) : (
          ""
        )}
        <p className="title">Email</p>
        <input
          value={email}
          required={true}
          type="email"
          name="email"
          onChange={(e) => setemail(e.target.value)}
        />
        <p className="title">Password</p>
        <input
          value={password}
          required={true}
          type="password"
          name="password"
          onChange={(e) => setpassword(e.target.value)}
        />

        {title === "Signup" ? (
          <>
            <input
              className="profilepicinput"
              type="file"
              id="file"
              name="profilepic"
              accept=".png, .jpg, .jpeg,"
              required={true}
              onChange={(e) => setprofilepic(e.target.files[0])}
            />

            <label htmlFor="file" className="selectprofilepic">
              <Image className="picicon" />
              <p> Upload Profile Pic</p>
            </label>
          </>
        ) : (
          ""
        )}

        {title === "Login" ? (
          <Link to="/Passwordreset" className="forget">
            <p className="forget">Forgot password?</p>{" "}
          </Link>
        ) : (
          ""
        )}
        <button type="submit" className="getin">
          GetIn
        </button>

        {title === "Login" ? (
          <Link to="/Signup">
            <p className="noaccount">Don't have an account?</p>
          </Link>
        ) : (
          <Link to="/Login">
            <p className="noaccount">Already have an account?</p>
          </Link>
        )}
      </form>
    </div>
  );
};

export default Authpage;
