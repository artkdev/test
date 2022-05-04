import styled from "styled-components";

import back from "./../../assets/Sevices/Ellipse.png";

export const StyledOurServices = styled.section`
  margin-top: 150px;
  width: 100%;
  padding: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0b2038;

  .wrapper {
    width: 100%;
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
        margin-right: 200px;
        opacity: 0;
        transition: transform 1s, opacity 0.3s;
      }
      .aos-animate {
        opacity: 1;
        transition: transform 1s, opacity 0.3s;
      }
      h1 {
        width: fit-content;
        font-family: "Syncopate";
        font-style: normal;
        font-weight: 700;
        font-size: 55px;
        line-height: 145%;
        /* identical to box height, or 80px */

        text-transform: uppercase;

        color: #ffffff;
        z-index: 2;
      }
    }

    .servicesBlock {
      width: 100%;
      max-width: 1020px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
  @media (max-width: 1023px) {
    .wrapper {
      .head {
        h1 {
          font-size: 40px;
        }
      }
    }
  }
  @media (max-width: 767px) {
    .wrapper {
      .head {
        h1 {
          font-size: 30px;
        }
      }
      .servicesBlock {
        max-width: 500px;
      }
    }
  }
`;
