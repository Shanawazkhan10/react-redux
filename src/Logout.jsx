import React from "react";
import { logout, selectUser } from "./Feature/feature";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { deleteTodo } from "./Action";
const Logout = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const user = useSelector(selectUser);
  const taskobj = useSelector((state) => state.todos.data[0]);
  const taskobj1 = useSelector((state) => state.todos.data[1]);
  const hanldeClick = (e) => {
    e.preventDefault();
    dispatch(deleteTodo());
  };

  return (
    <div>
      <h1>HELLO USER</h1>
      {taskobj ? (
        <div>
          <p> {taskobj.name}</p>
          <p> {taskobj.email}</p>
          <p> {taskobj.Password}</p>
          <p> {taskobj1.pan}</p>
          <p> {taskobj1.dob}</p>
        </div>
      ) : (
        history.push("/")
      )}
      <button onClick={hanldeClick}>CLIKCC UP</button>
    </div>
  );
};

export default Logout;
