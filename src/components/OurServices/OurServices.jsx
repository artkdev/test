import React from "react";
import { StyledOurServices } from "./syles";
import Card from "../Card/Card";
import Card2 from "../Card/Card2";
import Card3 from "../Card/Card3";
import Card4 from "../Card/Card4";
import Card5 from "../Card/Card5";
import Card6 from "../Card/Card6";
import line from "./../../assets/lineLeft.svg";

export default function OurServices() {
  return (
    <StyledOurServices id="Services_block">
      <div className="wrapper">
        <div className="head">
          <img
            data-aos="slide-right"
            data-aos-duration="1000"
            src={line}
            alt=""
          />
          <h1>services</h1>
        </div>

        <div className="servicesBlock">
          <Card />
          <Card2 />
          <Card6 />
       
          <Card4 />
          <Card5 />
          <Card3 />
        </div>
      </div>
    </StyledOurServices>
  );
}
