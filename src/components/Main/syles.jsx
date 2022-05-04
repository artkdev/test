import styled from "styled-components";

export const StyledMain = styled.section`
  width: 100%;
  padding: 0px 50px 0px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(359.94deg, #0b2038 0.05%, #0958ce 99.95%);
  overflow-x: hidden;
  position: relative;

  .gradient_background {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(62deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    animation: gradient 20s ease infinite;
    background-size: 400% 400%;
  }
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(359.94deg, #0b2038 10%, #0958ce24 90%);
  }

  .wrapper {
    width: 100%;
    padding-top: 75px;
    min-height: 100vh;
    max-width: 1360px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    .textBlock {
      width: 1266px;
      min-height: 102px;
      position: absolute;
      display: flex;
      flex-direction: column;
      position: relative;
      .top {
        width: 906px;
        position: relative;
        display: flex;
        align-items: center;
        height: 100px;
        .block {
          width: 0%;
          height: inherit;
          background: #00d1ff;
          position: absolute;
          animation: mainBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
          display: flex;
          z-index: 5;
        }
        p {
          position: relative;
          font-family: "Syncopate";
          font-style: normal;
          font-weight: 700;
          font-size: 70px;
          line-height: 145%;
          text-transform: uppercase;
          color: #ffffff;
          animation: mainFadeIn 2s 1s forwards, glow 5s 4s linear infinite;
          opacity: 0;
          display: flex;
          align-items: baseline;
          position: relative;
        }
      }
      .bottom {
        width: 990px;
        position: relative;
        left: 236px;
        align-items: center;
        height: 100px;
        margin-top: -10px;
        .block {
          width: 0%;
          height: inherit;
          background: #0051b0;
          position: absolute;
          animation: secBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
          animation-delay: 2s;
          display: flex;
          z-index: 5;
        }
        p {
          position: relative;
          font-family: "Syncopate";
          font-style: normal;
          font-weight: 700;
          font-size: 70px;
          line-height: 145%;
          text-transform: uppercase;
          color: #ffffff;
          animation: secFadeIn 2s 3s forwards, glow 5s linear infinite 4s;
          opacity: 0;
          display: flex;
          flex-direction: row;
          align-items: baseline;
          position: relative;
        }
      }
    }
    .button {
      position: absolute;
      bottom: 100px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 10px;
      opacity: 0;
      animation: secFadeIn 100ms forwards;
      cursor: pointer;
      p {
        font-family: "Source Sans Pro";
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 145%;
        /* or 20px */

        text-align: center;
        letter-spacing: 0.1em;
        text-transform: uppercase;

        background: 50% 100% / 50% 50% no-repeat
          radial-gradient(ellipse at bottom, #fff, transparent, transparent);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        animation: reveal 2000ms ease-in-out forwards,
          glow 2500ms linear infinite 7s;
      }
      img {
        width: 15px;
        height: 15px;
        opacity: 0;
        animation: secFadeIn 500ms 2s forwards;
      }
    }
    .hidden {
      animation: FadeOut 1s forwards;
      cursor: default;
      pointer-events: none;
    }
  }

  @media (max-width: 1359px) {
    .gradient_background {
    }
    .back {
    }

    .wrapper {
      .textBlock {
        width: 912px;
        .top {
          width: 598px;
          height: 64px;
          .block {
          }
          p {
            font-size: 45px;
          }
        }
        .bottom {
          width: 653px;
          height: 64px;
          left: 259px;
          .block {
          }
          p {
            font-size: 45px;
          }
        }
      }
      .button {
        p {
        }
        img {
        }
      }
      .hidden {
      }
    }
  }
  @media (max-width: 1023px) {
    .gradient_background {
    }
    .back {
    }
    padding: 0px 40px 0px 40px;
    .wrapper {
      .textBlock {
        width: 685px;
        .top {
          width: 465px;
          height: 51px;
          .block {
          }
          p {
            font-size: 35px;
          }
        }
        .bottom {
          width: 522px;
          height: 51px;
          left: 163px;
          .block {
          }
          p {
            font-size: 35px;
          }
        }
      }
      .button {
        p {
        }
        img {
        }
      }
      .hidden {
      }
    }
  }
  @media (max-width: 767px) {
    .gradient_background {
    }
    .back {
    }
    padding: 0px 30px 0px 30px;
    .wrapper {
      .textBlock {
        width: 474px;
        gap: 10px;
        .top {
          width: 323px;
          height: 36px;
          .block {
          }
          p {
            font-size: 25px;
          }
        }
        .bottom {
          width: 359px;
          height: 36px;
          left: 115px;
          .block {
          }
          p {
            font-size: 25px;
          }
        }
      }
      .button {
        p {
        }
        img {
        }
      }
      .hidden {
      }
    }
  }
  @media (max-width: 533px) {
    .gradient_background {
    }
    .back {
    }

    .wrapper {
      .textBlock {
        width: 274px;
        align-items: center;
        .top {
          width: 274px;
          height: 102px;
          .block {
          }
          p {
            text-align: center;
            font-size: 35px;
          }
        }
        .bottom {
          width: 247px;
          height: 102px;
          left: 0;
          .block {
          }
          p {
            text-align: center;
            font-size: 35px;
          }
        }
      }
      .button {
        p {
        }
        img {
        }
      }
      .hidden {
      }
    }
  }

  @keyframes mainBlock {
    0% {
      width: 0%;
      left: 0;
    }
    50% {
      width: 100%;
      left: 0;
    }
    100% {
      width: 0;
      left: 100%;
    }
  }

  @keyframes secBlock {
    0% {
      width: 0%;
      left: 0;
    }
    50% {
      width: 100%;
      left: 0;
    }
    100% {
      width: 0;
      left: 100%;
    }
  }

  @keyframes mainFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes popIn {
    0% {
      width: 0px;
      height: 0px;
      border: 0px solid #ddd;
      opacity: 0;
    }
    50% {
      width: 20px;
      height: 20px;
      opacity: 1;
      bottom: 35px;
    }
    65% {
      width: 17px;
      height: 17px;
      bottom: 0px;
    }
    80% {
      width: 20px;
      height: 20px;
      bottom: 15px;
    }
    100% {
      width: 17px;
      height: 17px;
      border: 0px solid #222;
      bottom: 0px;
    }
  }

  @keyframes secFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes glow {
    40% {
      text-shadow: 0 0 10px #fff;
    }
  }

  @keyframes reveal {
    80% {
      letter-spacing: 8px;
    }
    100% {
      background-size: 300% 300%;
    }
  }

  @keyframes FadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes gradient {
    0% {
      background-position: 0 50%;
    }
    25% {
      background-position: 50% 100%;
    }
    50% {
      background-position: 100% 50%;
    }
    75% {
      background-position: 50% 0;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes pulse {
    50% {
      opacity: 0;
    }
  }
`;
