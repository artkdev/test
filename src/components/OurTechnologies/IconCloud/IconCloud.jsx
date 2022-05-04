import React from "react";
import { Cloud, renderSimpleIcon } from "react-icon-cloud";
const {
  siJavascript,
  siNextdotjs,
  siTypescript,
  siReact,
  siHtml5,
  siCss3,
  siVercel,
  siTestinglibrary,
  siGithub,
  siFigma,
  siVisualstudiocode,
  siJira,
  siJest,
  siNodedotjs,
  siAndroid,
  siJava,
  siGit,
  siAmazonaws,
  siAndroidstudio,
  siExpress,
} = require("simple-icons/icons");

const icons = [
  siJavascript,
  siNextdotjs,
  siTypescript,
  siReact,
  siHtml5,
  siCss3,
  siVercel,
  siTestinglibrary,
  siGithub,
  siFigma,
  siVisualstudiocode,
  siJira,
  siJest,
  siNodedotjs,
  siAndroid,
  siJava,
  siGit,
  siAmazonaws,
  siAndroidstudio,
  siExpress,
].map((icon) => {
  return renderSimpleIcon({
    icon,
    size: 130,
    aProps: {
      onClick: (e) => e.preventDefault(),
    },
  });
});

export default function IconCloud() {
  const options = {
    activeCursor: "default",
    depth: 1,
    imageScale: 1,
    initial: [0.1, 0],
    minSpeed: 0.005,
    decel: 0.95,
    outlineColour: "#0000",
    reverse: true,
    tooltip: "native",
    tooltipDelay: 0,
    wheelZoom: false,
    noMouse: false,
    shuffleTags: true,
    repeatTags: 0,
    shadow: "#000000",
    shadowBlur: 1,
    shadowOffset: "[1,1]",
    animTiming: "Smooth",
    fadeIn: 500,
    radiusX: 0.9,
    radiusY: 0.9,
  };
  return <Cloud options={options}>{icons}</Cloud>;
}
