import React from "react";
import styled from "styled-components";

import line from "./../../assets/lineRight.svg";
import TeamSlider from "../TeamSlider/TeamSlider";

const StyledTeam = styled.div`
  width: 100%;
  min-height: 679px;
  padding: 50px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #0b2038;
  position: relative;
  .wrapper {
    max-width: 1360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .head {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 1000px;
      overflow-x: hidden;

      margin-bottom: 50px;

      img {
        width: 1000px;
        position: absolute;
        z-index: 1;
        margin-left: 200px;
        opacity: 0;
        transition: transform 1s, opacity 0.3s;
      }
      .aos-animate {
        opacity: 1;
        transition: transform 1s, opacity 0.3s;
      }
      h1 {
        font-family: "Syncopate";
        font-style: normal;
        font-weight: 700;
        font-size: 55px;
        line-height: 145%;
        /* identical to box height, or 80px */

        text-align: center;
        text-transform: uppercase;

        color: #ffffff;
        z-index: 2;
      }
      p {
        font-family: "Gruppo";
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 145%;
        /* or 32px */

        text-align: center;
        text-transform: uppercase;

        color: #ffffff;
      }
    }
    .content {
    }
  }
`;
export function Team() {
  return (
    <StyledTeam>
      <div className="wrapper">
        <div className="head">
          <img
            data-aos="slide-left"
            data-aos-duration="1000"
            src={line}
            alt=""
          />
          <h1>Team</h1>
        </div>

        <div className="content">
          <TeamSlider />
        </div>
      </div>
    </StyledTeam>
  );
}
