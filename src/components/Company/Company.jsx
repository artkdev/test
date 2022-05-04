import React, { useEffect } from "react";
import styled from "styled-components";

import line from "./../../assets/lineLeft.svg";

const StyledCompany = styled.div`
  width: 100%;
  min-height: 679px;
  padding: 50px 0;

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
      width: 1000px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
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
      .aos-animate{
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
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 70px;
      p {
        width: 724px;
        height: 330px;
        left: 120px;
        top: 210px;

        font-family: "Source Sans Pro";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 185%;
        /* or 33px */

        text-align: justify;
        text-transform: uppercase;

        color: #ffffff;
      }
      canvas {
        width: 330px;
        height: 330px;
      }
    }
  }
`;

export function Company() {
  useEffect(() => {
    // Get the canvas element from the DOM
    const canvas = document.querySelector("#scene");
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    // Store the 2D context
    const ctx = canvas.getContext("2d");

    if (window.devicePixelRatio > 1) {
      canvas.width = canvas.clientWidth * 2;
      canvas.height = canvas.clientHeight * 2;
      ctx.scale(2, 2);
    }

    /* ====================== */
    /* ====== VARIABLES ===== */
    /* ====================== */
    let width = canvas.clientWidth; // Width of the canvas
    let height = canvas.clientHeight; // Height of the canvas
    let rotation = 0; // Rotation of the globe
    let dots = []; // Every dots in an array

    /* ====================== */
    /* ====== CONSTANTS ===== */
    /* ====================== */
    /* Some of those constants may change if the user resizes their screen but I still strongly believe they belong to the Constants part of the variables */
    const DOTS_AMOUNT = 1000; // Amount of dots on the screen
    const DOT_RADIUS = 4; // Radius of the dots
    let GLOBE_RADIUS = width * 0.7; // Radius of the globe
    let GLOBE_CENTER_Z = -GLOBE_RADIUS; // Z value of the globe center
    let PROJECTION_CENTER_X = width / 2; // X center of the canvas HTML
    let PROJECTION_CENTER_Y = height / 2; // Y center of the canvas HTML
    let FIELD_OF_VIEW = width * 0.8;

    class Dot {
      constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;

        this.xProject = 0;
        this.yProject = 0;
        this.sizeProjection = 0;
      }
      // Do some math to project the 3D position into the 2D canvas
      project(sin, cos) {
        const rotX = cos * this.x + sin * (this.z - GLOBE_CENTER_Z);
        const rotZ =
          -sin * this.x + cos * (this.z - GLOBE_CENTER_Z) + GLOBE_CENTER_Z;
        this.sizeProjection = FIELD_OF_VIEW / (FIELD_OF_VIEW - rotZ);
        this.xProject = rotX * this.sizeProjection + PROJECTION_CENTER_X;
        this.yProject = this.y * this.sizeProjection + PROJECTION_CENTER_Y;
      }
      // Draw the dot on the canvas
      draw(sin, cos) {
        this.project(sin, cos);
        // ctx.fillRect(this.xProject - DOT_RADIUS, this.yProject - DOT_RADIUS, DOT_RADIUS * 2 * this.sizeProjection, DOT_RADIUS * 2 * this.sizeProjection);
        ctx.beginPath();
        ctx.arc(
          this.xProject,
          this.yProject,
          DOT_RADIUS * this.sizeProjection,
          0,
          Math.PI * 2
        );
        ctx.closePath();
        ctx.fillStyle = "#163F67";
        ctx.fill();
      }
    }

    function createDots() {
      // Empty the array of dots
      dots.length = 0;

      // Create a new dot based on the amount needed
      for (let i = 0; i < DOTS_AMOUNT; i++) {
        const theta = Math.random() * 2 * Math.PI; // Random value between [0, 2PI]
        const phi = Math.acos(Math.random() * 2 - 1); // Random value between [-1, 1]

        // Calculate the [x, y, z] coordinates of the dot along the globe
        const x = GLOBE_RADIUS * Math.sin(phi) * Math.cos(theta);
        const y = GLOBE_RADIUS * Math.sin(phi) * Math.sin(theta);
        const z = GLOBE_RADIUS * Math.cos(phi) + GLOBE_CENTER_Z;
        dots.push(new Dot(x, y, z));
      }
    }

    /* ====================== */
    /* ======== RENDER ====== */
    /* ====================== */
    function render(a) {
      // Clear the scene
      ctx.clearRect(0, 0, width, height);

      // Increase the globe rotation
      rotation = a * 0.0004;

      const sineRotation = Math.sin(rotation); // Sine of the rotation
      const cosineRotation = Math.cos(rotation); // Cosine of the rotation

      // Loop through the dots array and draw every dot
      for (var i = 0; i < dots.length; i++) {
        dots[i].draw(sineRotation, cosineRotation);
      }

      window.requestAnimationFrame(render);
    }

    // Function called after the user resized its screen
    function afterResize() {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      if (window.devicePixelRatio > 1) {
        canvas.width = canvas.clientWidth * 2;
        canvas.height = canvas.clientHeight * 2;
        ctx.scale(2, 2);
      } else {
        canvas.width = width;
        canvas.height = height;
      }
      GLOBE_RADIUS = width * 0.7;
      GLOBE_CENTER_Z = -GLOBE_RADIUS;
      PROJECTION_CENTER_X = width / 2;
      PROJECTION_CENTER_Y = height / 2;
      FIELD_OF_VIEW = width * 0.8;

      createDots(); // Reset all dots
    }

    // Variable used to store a timeout when user resized its screen
    let resizeTimeout;
    // Function called right after user resized its screen
    function onResize() {
      // Clear the timeout variable
      resizeTimeout = window.clearTimeout(resizeTimeout);
      // Store a new timeout to avoid calling afterResize for every resize event
      resizeTimeout = window.setTimeout(afterResize, 500);
    }
    window.addEventListener("resize", onResize);

    // Populate the dots array with random dots
    createDots();

    // Render the scene
    window.requestAnimationFrame(render);
  }, []);

  return (
    <StyledCompany>
      <div className="wrapper">
        <div className="head">
          <img
            data-aos="slide-right"
            data-aos-duration="1000"
            src={line}
            alt=""
          />
          <h1>Company</h1>
        </div>

        <div className="content">
          <p>
            Our team consist of 15 regular all age developers and keeps growing.
            We are remotely in touch from different cities and different
            countries. <br /> <br /> We have not just IT oriented members but
            also with art, engineering, economical and humanitarian disciplines
            past which brings us new thoughts and different perspectives in
            development. <br /> <br />
            We always trying to be on the edge of latest technologies and we
            always bringing something new in our forthcoming projects.
          </p>
          <canvas id="scene"></canvas>
        </div>
      </div>
    </StyledCompany>
  );
}
