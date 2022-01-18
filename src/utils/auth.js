import url from "../components/url";
import axios from "axios";

export const Authfc = async (e, title, formData) => {
  e.preventDefault();

  if (title === "Signup") {
    const res = await axios.post(`${url}/user/signup`, formData);
    console.log("response from server is", res);
    if (res.data.success === true) {
      window.location.replace("http://localhost:3000/Login");
      //  window.location.replace("http://areagg.netlify.app/Login");
    
    } else {
      alert(`Could not Signup Please retry ${res.data.status}`);
    }
  }
  if (title === "Login") {
    const res = await axios.post(`${url}/user/login`, formData);

    if (res.data.login === true) {
      await localStorage.setItem(
        "currentuser",
        JSON.stringify(res.data?.user[0])
      );
      await localStorage.setItem(
        "Authorization",
        JSON.stringify(res.data?.Authorization)
      );
      window.location.reload();
    } else alert("wrong credentials please retry");
  }
};
