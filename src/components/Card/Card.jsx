import React from "react";
import img1 from "./../../assets/Sevices/1.svg";
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
              <img className="header" src={img1} alt="" />
              <p>Websites development</p>
            </div>
            <div className="hover">
              <p>Personal, Corporate, Blog, Promo, Landing and more.</p>
            </div>
          </div>
        </div>
      </div>
    </StyledCard>
  );
}
