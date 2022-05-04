import React from "react";
import { NavLink } from "react-router-dom";
import { StyledHeader } from "./syles";

import logo from "../../assets/Header/logo.svg";
import socials1 from "../../assets/Header/socials1.svg";
import socials2 from "../../assets/Header/socials2.svg";
import socials3 from "../../assets/Header/socials3.svg";
import scrollToTop from "../../helpers/scrollToTop";

export default function Header() {
  return (
    <StyledHeader>
      <div className="wrapper">
        <div className="logoBlock">
          <NavLink className={"link"} to="/" onClick={() => scrollToTop()}>
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <nav className="navBlock">
          <NavLink className={"link"} to="/" onClick={() => scrollToTop()}>
            Home
          </NavLink>
          <NavLink
            className={"link"}
            to="/projects"
            onClick={() => scrollToTop()}
          >
            Projects
          </NavLink>
          <NavLink className={"link"} to="/about" onClick={() => scrollToTop()}>
            About
          </NavLink>
          <NavLink className={"link"} to="/" onClick={() => scrollToTop()}>
            Contact
          </NavLink>
        </nav>

        {/* <div className="langBlock">
          <button>RU</button>
          <button>ENG</button>
          <button>HE</button>
        </div> */}

        <div className="contactsBlock">
          <a href="/#" target={"_blank"} rel="noreferrer noopener">
            <img src={socials1} alt="contact1" />
          </a>
          <a href="/#" target={"_blank"} rel="noreferrer noopener">
            <img src={socials2} alt="contact2" />
          </a>
          <a href="/#" target={"_blank"} rel="noreferrer noopener">
            <img src={socials3} alt="contact3" />
          </a>
        </div>
      </div>
    </StyledHeader>
  );
}
