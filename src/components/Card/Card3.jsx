import React from "react";
import img3 from "./../../assets/Sevices/3.svg";
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
              <img className="header" src={img3} alt="" />
              <p>Software development</p>
            </div>
            <div className="hover">
              <p>
                Smart solutions for fintech, industry, healthcare, data
                management, food etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyledCard>
  );
}
