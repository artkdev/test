import AOS from "aos";
import React from "react";
import { Route, Routes } from "react-router";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
// import Projects from "../components/Projects/Projects";
import AboutUs from "./AboutUs/AboutUs";
import Home from "./Home/Home";
import OurPartners from "./OurPartners/OurPartners";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 100%;

  height: 100%;
  min-height: 100vh;

  background-color: #0b2038;
  * {
    transition: all 0.5s;
  }
`;
function App() {
  AOS.init();
  // window.addEventListener("wheel", (e) => e.preventDefault(), {
  //   passive: false,
  // });
  return (
    <StyledApp data-testid="AppTestId">
      <Header />
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route exact path="/partners" element={<OurPartners />} />
        {/* <Route exact path="/projects" element={<Projects />} /> */}
        <Route exact path="/about" element={<AboutUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </StyledApp>
  );
}

export default App;
