import "aos/dist/aos.css"; // You can also use <link> for styles
import React from "react";
import "./portfolio.css";
import { useNavigate } from "react-router-dom";
import MySubstack from "../MySubstack";

const Content2 = () => {
  const navigate = useNavigate();
  return (
    <div className="content__2">
      <div className="content__title">
        <h1>My Views 🌱</h1>
      </div>
      <p>I create content on how people can flourish and help other flourish</p>
      <div className="content2__wrapper" data-aos="fade-up">
        <div className="wrapper1">
          <h2>My Substack📝</h2>
          <div className="wrapper1__content">
            I publish essays on how we can "level up Nepal" with tech,media, and
            movement-building
          </div>
          <button
            onClick={() => {
              navigate("/mySubstack");
            }}
          >
            READ MY SUBSTACK
          </button>
        </div>
        <div className="wrapper2">
          <h2>My Wiki 🦸🏻‍♂️</h2>
          <div className="wrapper2__content">
            I publish how-to guides and my views on a wide variety of topics
            that don't fit into a particular bucket
          </div>
          <button
            onClick={() => {
              navigate("/myWikki");
            }}
          >
            CHECK OUT MY WIKI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content2;
