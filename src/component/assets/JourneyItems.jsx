import React, { useEffect, useRef } from "react";
import "./items.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

import { useScroll } from "framer-motion";
// import Aos from "aos";
const JourneyItems = (props) => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <div className="item">
      <div className="itemContent">
        <p className="prop_name" data-aos="fade-right">
          {props.name}
        </p>

        {/* <div className="image_sizes"> */}
        <img src={props.image} alt="" data-aos="fade-left"></img>
        <p className="prop_duration" data-aos="fade-right">
          {props.duration}
        </p>
        <p className="prop_description" data-aos="fade-right">
          {props.desc}
          <p data-aos="fade-right"> {props.desc1}</p>
        </p>
        {/* <p data-aos="fade-right">{props.desc2}</p> */}

        {/* </div> */}
      </div>
    </div>
  );
};

export default JourneyItems;
