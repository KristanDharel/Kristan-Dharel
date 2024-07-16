import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import MyWikki from "./MyWikki";
import MySubstack from "../MySubstack";
import Portfolio from "./Portfolio";

const MyRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/myWikki" element={<MyWikki />} />
        <Route path="/mySubstack" element={<MySubstack />} />

        <Route path=":id" element={"Page not found ERROR 404"} />
      </Routes>
    </div>
  );
};

export default MyRouter;
