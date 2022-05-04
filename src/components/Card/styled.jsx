import styled from "styled-components";

export const StyledCard = styled.div`
  margin: 30px 20px;
  .Back {
    width: 300px;
    height: 180px;
    justify-content: center;
    align-items: center;
    display: flex;

    position: relative;

    .bluredBack {
      opacity: 0;
      transition: opacity 0.5s;
      position: absolute;
      width: 270px;
      height: 150px;
      justify-content: center;
      align-items: center;
      display: flex;
      overflow: hidden;
      filter: blur(30px);

      .colorBack {
        position: absolute;
        width: 350px;
        height: 350px;
        background: linear-gradient(132deg, #5ddcff 25%, #3c67e3 43%, #4e00c2);

        animation: "spin" 2.5s linear infinite;
        border-radius: 50%;
      }
    }
    .borderBack {
      width: 282px;
      height: 165px;
      justify-content: center;
      align-items: center;
      display: flex;
      position: relative;
      overflow: hidden;
      border-radius: 6px;
      box-shadow: none;
      .bluredBorderBack {
        opacity: 0;
        transition: opacity 0.5s;
        position: absolute;
        width: 282px;
        height: 165px;
        justify-content: center;
        align-items: center;
        display: flex;
        .colorBorderBack {
          position: absolute;
          width: 350px;
          height: 350px;
          background: linear-gradient(
            132deg,
            #74e1ff 25%,
            #3c67e3 43%,
            #4e00c2
          );
          animation: "spin" 2.5s linear infinite;
        }
      }
      .card {
        background: #09192f;
        width: 277px;
        height: 160px;
        padding: 3px;
        position: relative;
        border-radius: 6px;
        justify-content: center;
        align-items: center;
        display: flex;
        cursor: pointer;
        position: relative;
        .initial {
          position: absolute;
          opacity: 1;
          transition: opacity 0.5s;
          justify-content: center;
          align-items: center;
          display: flex;
          flex-direction: column;
          p {
            max-width: fit-content;
            margin-top: 15px;
            font-family: "Source Sans Pro";
            font-style: normal;
            font-weight: 700;
            font-size: 17px;
            line-height: 145%;
            /* or 25px */

            text-align: center;
            text-transform: uppercase;

            color: #ffffff;
          }
        }
        .hover {
          width: 100%;
          position: absolute;
          opacity: 0;
          transition: opacity 0.5s;
          padding: 0 30px;
          justify-content: center;
          align-items: center;
          display: flex;
          p {
            font-family: "Source Sans Pro";
            font-style: normal;
            font-weight: 400;
            font-size: 17px;
            line-height: 145%;
            /* or 25px */

            text-align: center;

            color: #ffffff;
          }
        }
      }
    }
    :hover {
      .bluredBack {
        opacity: 1;
        transition: opacity 0.5s;
      }
      .borderBack {
        box-shadow: 0px -10px 65px rgba(104, 215, 244, 0.2),
          0px 10px 64px rgba(57, 50, 190, 0.2);
        background-color: #2f3b4e;
        .bluredBorderBack {
          opacity: 1;
          transition: opacity 0.5s;
        }
        .card {
          .initial {
            transition: opacity 0.5s;
            opacity: 0;
          }
          .hover {
            transition: opacity 0.5s;
            opacity: 1;
          }
        }
      }
    }

    @keyframes spin {
      0% {
        transform: rotateZ(0deg);
      }
      100% {
        transform: rotateZ(360deg);
      }
    }
  }
  @media (max-width: 1023px) {
    margin: 15px 10px;
    .Back {
      width: 270px;

      .bluredBack {
        width: 240px;

        .colorBack {
          width: 320px;
        }
      }
      .borderBack {
        width: 252px;

        .bluredBorderBack {
          width: 252px;

          .colorBorderBack {
            width: 320px;
          }
        }
        .card {
          width: 247px;

          .initial {
            p {
            }
          }
          .hover {
            p {
            }
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    margin: 10px 0px;

    .Back {
      width: 210px;

      .bluredBack {
        width: 170px;

        .colorBack {
          width: 250px;
        }
      }
      .borderBack {
        width: 182px;

        .bluredBorderBack {
          width: 182px;

          .colorBorderBack {
            width: 250px;
          }
        }
        .card {
          width: 177px;

          .initial {
            p {
            }
          }
          .hover {
            p {
            }
          }
        }
      }
    }
  }
  @media (max-width: 533px) {
  }
`;
