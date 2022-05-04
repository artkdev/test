import React from "react";
import { NavLink } from "react-router-dom";
import { StyledFooter } from "./syles";

import logo from "./../../assets/Footer/logo.svg";
import socials1 from "../../assets/Footer/socials1.svg";
import socials2 from "../../assets/Footer/socials2.svg";
import socials3 from "../../assets/Footer/socials3.svg";
import scrollToTop from "../../helpers/scrollToTop";

export default function Footer() {
  return (
    <StyledFooter>
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
          <NavLink
            className={"link"}
            to="/partners"
            onClick={() => scrollToTop()}
          >
            Contacts
          </NavLink>
        </nav>
        <div className="OurContacts">
          <p>mail: artkdev@gmail.com</p>
          <p>tel:+380 11 222 33 44</p>
        </div>
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
        <div className="rightsBlock">
          <p>2021-2022 ArtKDev</p>
        </div>
      </div>
    </StyledFooter>
  );
}
