import React from "react";
import IconCloud from "./IconCloud/IconCloud";
import { StyledOurTechnologies } from "./syles";
import line from "./../../assets/lineRight.svg";
import backLightRight from "./../../assets/backLight.svg";

export default function OurTechnologies() {
  return (
    <StyledOurTechnologies>
      <div className="wrapper">
        <div className="head">
          <img
            data-aos="slide-left"
            data-aos-duration="1000"
            src={line}
            alt=""
          />
          <h1> Technologies</h1>
        </div>
        <div className="content">
          <div className="left">
            <p>
              We eager to bring new solutions via state of the art technologies.
            </p>
          </div>
          <div className="right">
            <img src={backLightRight} alt="" />
            <div className="cloud">
              <IconCloud />
            </div>
          </div>
        </div>
      </div>
    </StyledOurTechnologies>
  );
}
