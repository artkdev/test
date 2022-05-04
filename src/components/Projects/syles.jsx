import styled from "styled-components";
import back from "../../assets/Main/back.png";

export const StyledProjects = styled.section`
  margin-top: 150px;
  width: 100%;
  padding: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #0b2038;

  position: relative;
  .light {
    padding-top: 50px;
    position: absolute;
    width: 849px;
    height: 694px;
    z-index: 1;
  }
  .wrapper {
    width: 100%;
    max-width: 1360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;
    .head {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 1000px;
      overflow-x: hidden;

      flex-direction: column;

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
    }
    p {
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 145%;
      /* or 32px */

      text-align: center;
      text-transform: uppercase;

      color: #ffffff;

      margin-bottom: 50px;
    }
  }
`;
