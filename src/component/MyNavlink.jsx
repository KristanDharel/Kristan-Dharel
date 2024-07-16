import React from "react";
import { NavLink } from "react-router-dom";

const MyNavlink = () => {
  return (
    <div>
      <NavLink to={"/myWikki"} target="_blank"></NavLink>
      <NavLink to={"/mySubstack"} target="_blank"></NavLink>
    </div>
  );
};

export default MyNavlink;
