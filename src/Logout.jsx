import React from "react";
import { logout, selectUser } from "./Feature/feature";
import { useDispatch, useSelector } from "react-redux";
const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const hanldeClick = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div>
      <h1>HELLO WORLR</h1>
      <p>HELLO {user.name}</p>
      <button onClick={hanldeClick}>CLIKCC UP</button>
    </div>
  );
};

export default Logout;
