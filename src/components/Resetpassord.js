import React, { useState } from "react";
import "../css/Resetpassword.css";
import logo from "../images/Logo.SVG";
import Pagecontainer from "./Pagecontainer";
import axios from "axios"
import url from "./url"
const Resetpassord = () => {
  const [email,setemail]=useState("")
  const [OTPcode,setOTPcode]=useState("")
  const [error,seterror]=useState("")
  const [newpassword,setnewpassword]=useState("")
  const [confirmnewpassword,setconfirmnewpassword]=useState("")
  const [OTPcodesent,setOTPcodesent]=useState(false)
  const resetpassword = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post(`${url}/user/resetpassword`, {email});
      
    if (res.data.success) {
       setOTPcodesent(true)
    } 
    if (!res.data.success){
      seterror(res.data.message)
    }
    } catch (error) {
      console.log("something went wrong",error)
    }    
  };
  const confirmpasswordreset = async (e) => {
    e.preventDefault();
    if(newpassword!==confirmnewpassword){
      seterror({
        password:"passwords do not match"
      })
      return
    }
    try {
      const res = await axios.post(`${url}/user/confirmpasswordreset`, {OTPcode,email,newpassword,confirmnewpassword});
      console.log("response is ",res);
    if (res.data.success) {
      
       window.location.replace("http://localhost:3000/Login");
    }
    if (!res.data.success) {
      seterror(res.data.error);
      
    }
    } catch (error) {
      console.log("something went wrong",error)
    }    
  };
  console.log(error)
  return (
    <Pagecontainer>
      <div className="resetcontainer">
        <img src={logo} alt="AreaGG" />
        {
          !OTPcodesent?( <form className="resetform"
          encType="multipart/form-data"
       onSubmit={(e) => resetpassword(e)}
       >
         <p className="title">Email</p>
         {error?<p className="error">{error}</p>:""}
         <input
         value={email}
         required={true}
         type="email"
         name="email"
         onChange={(e) => {
           if(error) seterror("")
           setemail(e.target.value)}
          }
       />
         <button className="resetbtn" type="submit">Reset Password</button>
         <p className="checkinbox">
           Check your inbox to reset the password after subbmitting the email
         </p>
       </form>):(
          <form className="resetform"
          encType="multipart/form-data"
       onSubmit={(e) => confirmpasswordreset(e)}
       >
         <p className="title">Please enter the OTP code </p>
         {error.OTPcode?<p className="error">{error.OTPcode}</p>:""}
         <input
         value={OTPcode}
         required={true}
         type="number"
         name="OTPcode"
         onChange={(e) => {
           if (error) seterror("")
          setOTPcode(e.target.value)}}
       />
       
        <input
          value={newpassword}
          required={true}
          type="password"
          name="newpassword"
          onChange={(e) => {
            if(error)
            seterror("")
            setnewpassword(e.target.value)}
          }
        />
         
         <input
          value={confirmnewpassword}
          required={true}
          type="password"
          name="confirmnewpassword"
          onChange={(e) => {
            if(error)
            seterror("")
            setconfirmnewpassword(e.target.value)}
          }
        />
        {error.password?<p className="error">{error.password}</p>:""}
         <button className="resetbtn" type="submit">Confirm Reset Password</button>
         <p className="checkinbox">
           Check your inbox to get the OTPcode 
         </p>
       </form>
       )
        }
        
      </div>
    </Pagecontainer>
  );
};

export default Resetpassord;
