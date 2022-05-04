import styled from "styled-components";
import back from "../../assets/Main/back.png";

export const StyledOurTechnologies = styled.section`
  margin-top: 150px;
  width: 100%;
  padding: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
        margin-left: 200px;
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
    .content {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      .left {
        max-width: 533px;
        font-family: "Source Sans Pro";
        font-style: normal;
        font-weight: 700;
        font-size: 50px;
        line-height: 145%;
        /* or 73px */

        color: #ffffff;
      }
      .right {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        img {
          position: absolute;
          width: 749px;
          height: 594px;
          z-index: 1;
        }
        .cloud {
          position: absolute;
          padding-left: 60px;
          z-index: 2;
          width: 500px;
          height: 500px;
        }
      }
    }
  }
`;
