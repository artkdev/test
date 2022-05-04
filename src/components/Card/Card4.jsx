import React from "react";
import img4 from "./../../assets/Sevices/4.svg";
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
              <img className="header" src={img4} alt="" />
              <p>online stores</p>
            </div>
            <div className="hover">
              <p>Online platforms with heavy database workarounds.</p>
            </div>
          </div>
        </div>
      </div>
    </StyledCard>
  );
}
