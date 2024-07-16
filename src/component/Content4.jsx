import React from "react";
import twitter from "./instu.png";
import link from "./hi.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import FormikForm from "./FormikForm";

const Content4 = () => {
  return (
    <div className="content4">
      <h2>I'm Kathmandu-bred,</h2>
      <h2>wander from East to West</h2>
      <h2>and welcome bribes in the form of Money</h2>
      <p>
        The best way to get my attention is to appreciate my work by leaving a
        thoughtful comment on the following
      </p>

      <div className="content4__img">
        <img className="link" src={link} alt="" />
        <img className="insta" src={twitter} alt="" />
      </div>
      {/* <FormikForm></FormikForm> */}
    </div>
  );
};

export default Content4;
