import React from "react";
import styled from "styled-components";

import ArtemKrol from "./../../assets/Team/Artem Krol.png";
import GeorgeBushchan from "./../../assets/Team/George Bushchan.png";
import AlinaShinkarchuk from "./../../assets/Team/Alina Shinkarchuk.png";
import OleksandrBahlai from "./../../assets/Team/Oleksandr Bahlai.png";
import OleksandrPatchev from "./../../assets/Team/Oleksandr Pachev.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const StyledSlyder = styled.div`
  width: calc(100vw - 12px);
  max-width: 1360px;
  overflow: hidden;
  .swiper-wrapper {
    align-items: center;
    justify-content: center;
    height: 460px;
  }
  .swiper-slide {
    cursor: pointer;
    height: fit-content;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    .card {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 370px;
      height: 460px;
      .person {
        filter: blur(10px) grayscale(1);
        overflow: hidden;
        width: 290px;
        height: 370px;
        background: #09192f;
        border: 2px solid #303f52;
        box-sizing: border-box;
        border-radius: 19px;
        padding: 20px;

        display: flex;
        flex-direction: column;
        align-items: center;

        transition: all 0.3s;
        .photo {
          width: 250px;
          height: 330px;
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;

          transition: all 0.3s;
          img {
            border-radius: 11px;
            width: 330px;
            height: 330px;

            transition: all 0.3s;
          }
        }
        h2 {
          height: 0px;
          top: 10px;
          position: relative;
          opacity: 0;
          font-family: "Source Sans Pro";
          font-style: normal;
          font-weight: 400;
          font-size: 22px;
          line-height: 28px;
          /* identical to box height */

          letter-spacing: 0.1em;
          text-transform: uppercase;

          color: #ffffff;

          transition: all 0.5s;
        }
        p {
          height: 0px;
          position: relative;
          top: 10px;
          opacity: 0;
          font-family: "Source Sans Pro";
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 25px;

          color: #ffffff;

          transition: all 0.5s;
        }
      }
    }
  }
  .swiper-slide-prev {
    z-index: 2;

    transition: all 0.5s;
    .card {
      .person {
        filter: blur(3px) grayscale(0.5);
        width: 330px;
        height: 410px;
        transition: all 0.5s;

        .photo {
          width: 290px;
          height: 370px;
          transition: all 0.5s;
          img {
            width: 370px;
            height: 370px;
            transition: all 0.5s;
          }
        }
        h2 {
        }
        p {
        }
      }
    }
  }
  .swiper-slide-next {
    z-index: 2;

    transition: all 0.5s;
    .card {
      .person {
        filter: blur(3px) grayscale(0.5);
        width: 330px;
        height: 410px;
        transition: all 0.5s;

        .photo {
          width: 290px;
          height: 370px;
          transition: all 0.5s;
          img {
            width: 370px;
            height: 370px;
            transition: all 0.5s;
          }
        }
        h2 {
        }
        p {
        }
      }
    }
  }
  .swiper-slide-active {
    cursor: default;
    z-index: 3;
    .card {
      .person {
        filter: blur(0px) grayscale(0);
        width: 370px;
        height: 460px;
        transition: all 0.5s;
        .photo {
          width: 320px;
          height: 320px;
          margin-bottom: 25px;
          transition: all 0.5s;
          img {
            border-radius: 11px;
            width: 320px;
            height: 320px;
            transition: all 0.5s;
          }
        }
        h2 {
          top: 0px;
          height: 17px;
          opacity: 1;
          margin-bottom: 10px;
          transition: all 0.5s;
        }
        p {
          top: 0px;
          opacity: 1;
          height: 16px;
          transition: all 0.5s;
        }
      }
    }
  }
`;

export default function TeamSlider() {
  return (
    <StyledSlyder>
      <Swiper
        spaceBetween={0}
        slidesPerView={5}
        centerInsufficientSlides={true}
        centeredSlides={true}
        slideToClickedSlide={true}
        speed={500}
        preventInteractionOnTransition={true}
      >
        <SwiperSlide>
          <div className="card">
            <div className="person">
              <div className="photo">
                <img src={ArtemKrol} alt="" />
              </div>
              <h2>Artem krol</h2>
              <p>CEO</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="person">
              <div className="photo">
                <img src={GeorgeBushchan} alt="" />
              </div>
              <h2>George Bushchan</h2>
              <p>Head of Frontend</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="person">
              <div className="photo">
                <img src={AlinaShinkarchuk} alt="" />
              </div>
              <h2>Alina Shinkarchuk</h2>
              <p> Head of Design</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="person">
              <div className="photo">
                <img src={OleksandrBahlai} alt="" />
              </div>
              <h2>Oleksandr Bahlai</h2>
              <p>Project Manager</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="person">
              <div className="photo">
                <img src={OleksandrPatchev} alt="" />
              </div>
              <h2>Oleksandr Patchev</h2>
              <p>Head of Backend</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </StyledSlyder>
  );
}
