import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { login } from "./Feature/feature";
// import reduceUser from "./Reducer/users";
import { useHistory } from "react-router-dom";
import { addTodo } from "./Action";
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
      addTodo({
        pan: Name,
        dob: Email,
      })
    );

    history.push("/log");
  };
  return (
    <div>
      <h1>HELLO WORLD</h1>
      PanCard:{" "}
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={Name}
        className="form-control"
        name="title"
      />
      DOB:{" "}
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={Email}
        className="form-control"
        name="title"
      />
      <br />
      <button onClick={handleClick}>click me click</button>
    </div>
  );
};

export default Login;
