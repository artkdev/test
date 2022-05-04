import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import slide1 from "../../assets/projects/slide1.png";

const StyledSlider = styled.div`
  max-width: 900px;
  .top {
    margin-bottom: 50px;
    .slic-list {
    }
    .slick-slide {
      z-index: -1;
      transform: scale(0.5);
      transition: transform 0.5s;
    }
    .slick-active {
      z-index: -1;
      .slideCard {
        opacity: 0.5;
        transition: all 0.5s;
      }
    }
    .slick-center {
      transform: scale(1);
      transition: transform 0.5s;
      z-index: 1;
      .slideCard {
        cursor: default;
        opacity: 1;
        transition: all 0.5s;
      }
    }
    .slideCard {
      opacity: 0.5;
      transition: all 0.5s;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      img {
        width: 325px;
        height: 235px;
        background: #ffffff;
        border-radius: 20px;
      }
    }
  }

  .slideText {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 50px;
    .description {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 10px;
      h2 {
        font-family: "Source Sans Pro";
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 145%;
        /* identical to box height, or 29px */

        color: #ffffff;
      }
      p {
        width: 427px;
        height: 52px;
        font-family: "Source Sans Pro";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 145%;
        /* or 26px */

        color: #ffffff;
      }
    }
    .link {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 10px;
      h2 {
        font-family: "Source Sans Pro";
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 25px;

        color: #ffffff;
      }
      a {
        font-family: "Source Sans Pro";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        /* identical to box height */

        color: #ffffff;
      }
    }
  }
`;

export default class SlidesCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    const slider1settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true,
      focusOnSelect: true,
      className: "center",
      centerMode: true,
    };
    const slider2settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    return (
      <StyledSlider>
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
          {...slider1settings}
          className="top"
        >
          <div>
            <div className="slideCard">
              <img src={slide1} alt="" />
            </div>
          </div>
          <div>
            <div className="slideCard">
              <img src={slide1} alt="" />
            </div>
          </div>
          <div>
            <div className="slideCard">
              <img src={slide1} alt="" />
            </div>
          </div>
          <div>
            <div className="slideCard">
              <img src={slide1} alt="" />
            </div>
          </div>
          <div>
            <div className="slideCard">
              <img src={slide1} alt="" />
            </div>
          </div>
          <div>
            <div className="slideCard">
              <img src={slide1} alt="" />
            </div>
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          {...slider2settings}
        >
          <div>
            <div className="slideText">
              <div className="description">
                <h2>Description:</h2>
                <p>
                  Software solution for registering and monitoring failures in
                  production facilities
                </p>
              </div>
              <div className="link">
                <h2>Visit:</h2>
                <a href="http://">www.site.com</a>
              </div>
            </div>
          </div>
          <div>
            <div className="slideText">
              <div className="description">
                <h2>Description:</h2>
                <p>
                  Software solution for registering and monitoring failures in
                  production facilities
                </p>
              </div>
              <div className="link">
                <h2>Visit:</h2>
                <a href="http://">www.site.com</a>
              </div>
            </div>
          </div>
          <div>
            <div className="slideText">
              <div className="description">
                <h2>Description:</h2>
                <p>
                  Software solution for registering and monitoring failures in
                  production facilities
                </p>
              </div>
              <div className="link">
                <h2>Visit:</h2>
                <a href="http://">www.site.com</a>
              </div>
            </div>
          </div>
          <div>
            <div className="slideText">
              <div className="description">
                <h2>Description:</h2>
                <p>
                  Software solution for registering and monitoring failures in
                  production facilities
                </p>
              </div>
              <div className="link">
                <h2>Visit:</h2>
                <a href="http://">www.site.com</a>
              </div>
            </div>
          </div>
          <div>
            <div className="slideText">
              <div className="description">
                <h2>Description:</h2>
                <p>
                  Software solution for registering and monitoring failures in
                  production facilities
                </p>
              </div>
              <div className="link">
                <h2>Visit:</h2>
                <a href="http://">www.site.com</a>
              </div>
            </div>
          </div>
          <div>
            <div className="slideText">
              <div className="description">
                <h2>Description:</h2>
                <p>
                  Software solution for registering and monitoring failures in
                  production facilities
                </p>
              </div>
              <div className="link">
                <h2>Visit:</h2>
                <a href="http://">www.site.com</a>
              </div>
            </div>
          </div>
        </Slider>
      </StyledSlider>
    );
  }
}
