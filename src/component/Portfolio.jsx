import React from "react";
import { Parallax } from "react-parallax";
import first from "./image1.jpg";
import "./portfolio.css";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";

import Content4 from "./Content4";
import MyRouter from "./MyRouter";

const Portfolio = () => {
  return (
    <div>
      <Parallax strength={600} bgImage={first}>
        <div className="content">
          <div className="text__content">
            <p>Hey, I'm</p> <h1>KRISTAN DHAREL</h1>
          </div>
        </div>
      </Parallax>
      <div className="content__1" id="journey_content">
        <div className="content__title">
          <h1>My Journey</h1>
        </div>
        <div className="content__description">
          <p>
            A proactive Bsc(Hons) Computing student at Islington College,
            looking to join the workforce to gain real-world work experience.
          </p>{" "}
          <p>
            Dependable and reliable, ready to learn and grow with the company.
          </p>
        </div>
        <Content1 />
      </div>
      {/* <Content2 /> */}
      <Content3 />

      <Content4 />
    </div>
  );
};

export default Portfolio;
