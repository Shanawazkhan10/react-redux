import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./Feature/feature";
import { useHistory } from "react-router-dom";
const Login = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();
  let history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    // console.log(Name,Email,Password);
    dispatch(
      login({
        name: Name,
        email: Email,
        Password: Password,
      })
    );
    history.push("/log");
  };
  return (
    <div>
      <h1>HELLO WORLD</h1>
      Name:{" "}
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={Name}
        className="form-control"
        name="title"
      />
      emial:{" "}
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={Email}
        className="form-control"
        name="title"
      />
      password:{" "}
      <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        value={Password}
        className="form-control"
        name="title"
      />
      <br />
      <button onClick={handleClick}>click me click</button>
    </div>
  );
};

export default Login;
