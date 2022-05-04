import React from "react";
import img2 from "./../../assets/Sevices/2.svg";
import { StyledCard } from "./styled";

export default function Card() {
  return (
    <StyledCard>
      <div className="Back">
        <div className="bluredBack">
          <div className="colorBack"></div>
        </div>
        <div className="borderBack">
          <div className="bluredBorderBack">
            <div className="colorBorderBack"></div>
          </div>
          <div className="card">
            <div className="initial">
              <img className="header" src={img2} alt="" />
              <p>Technical Support</p>
            </div>
            <div className="hover">
              <p>Post development support, Site reworks and adaptations.</p>
            </div>
          </div>
        </div>
      </div>
    </StyledCard>
  );
}
