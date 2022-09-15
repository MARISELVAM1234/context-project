import React, { useState , useContext } from "react";
import { useNavigate } from "react-router-dom";
import { stateContext } from "../context/contextState";
import "./login.css";

const Login = () => {
  const [userName] = useState(["MARISELVAM"]);
  const [password] = useState(["123456"]);
  const [getName, setGetName] = useState([]);
  const [getPass, setGetpass] = useState([]);
  const navigate = useNavigate();
  const {state , dispatch} = useContext(stateContext)
  

  // const log = () =>{
  // }

  const loginFun = (event) => {
    if (event.target.name === "Name") {
      setGetName([event.target.value]);
    }
    if (event.target.name === "pass") {
      setGetpass([event.target.value]);
    }
  };

  const include = () => {
    if (userName[0] === getName[0] && password[0] === getPass[0]) {
    } else {
      alert("INVALID USERNAME AND PASSWORD");
    }

    dispatch({type:"login" , payload : true})
    localStorage.setItem('isLoggedIn',JSON.stringify(true))
    navigate("/home");
    console.log(state , "state");
  };

  return (
    <div className="input-box">
      <div className="input-ele">
        <h1>ENTER YOUR LOGIN DETAILS </h1>
        <label style={{ fontWeight: "bold" }}> USERNAME : </label>
        <input
          name="Name"
          placeholder="Enter the product name"
          onChange={loginFun}
        ></input>
        <br></br>
        <br></br>
        <label style={{ fontWeight: "bold" }}> PASSWORD : </label>
        <input
          name="pass"
          type="password"
          placeholder="Enter the password"
          onChange={loginFun}
        ></input>

        <br></br>

        <button id="btn-part" onClick={() => include()}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
