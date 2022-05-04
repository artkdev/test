import React from "react";
import img5 from "./../../assets/Sevices/5.svg";
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
              <img className="header" src={img5} alt="" />
              <p>Blockchain networks</p>
            </div>
            <div className="hover">
              <p>Blockchain solutions, NFTs, Smart-contracts and more.</p>
            </div>
          </div>
        </div>
      </div>
    </StyledCard>
  );
}
