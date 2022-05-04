import React from "react";
import img6 from "./../../assets/Sevices/6.svg";
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
              <img className="header" src={img6} alt="" />
              <p>UI/ux design</p>
            </div>
            <div className="hover">
              <p>Various UI/UX designs for any platform.</p>
            </div>
          </div>
        </div>
      </div>
    </StyledCard>
  );
}
