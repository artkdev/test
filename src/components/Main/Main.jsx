import React, { useEffect, useRef, useState } from "react";
import { StyledMain } from "./syles";
import buttn from "./../../assets/Main/buttn.svg";
import { Link } from "react-scroll";
import scrollToTop from "../../helpers/scrollToTop";

export default function Main() {
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowhalf = window.innerHeight / 2;
      if (currentScrollY >= windowhalf) {
        setScrolled(true);
      }
      if (currentScrollY <= windowhalf) {
        setScrolled(false);
      }
      if (currentScrollY >= 0) {
        document.body.style.overflow = "visible";
      }
    };

    // console.log(scrolled);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  useEffect(() => {
    setTimeout(function () {
      setLoaded(true);
    }, 4000);
  }, []);

  return (
    <StyledMain>
      <div className="gradient_background"></div>
      <div className="back"></div>
      <div className="wrapper">
        <div className="textBlock">
          <div className="top">
            <div className="block"></div>
            <p>Smart solutions</p>
          </div>
          <div className="bottom">
            <span className="block"></span>
            <p>for your business</p>
          </div>
        </div>
        {loaded ? (
          <Link
            className={!scrolled ? "button" : "button hidden"}
            to="Services_block"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          >
            <p>Discover</p>
            <img src={buttn} alt="" />
          </Link>
        ) : (
          ""
        )}
      </div>
    </StyledMain>
  );
}
