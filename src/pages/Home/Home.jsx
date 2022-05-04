import React from "react";
import styled from "styled-components";
import Main from "../../components/Main/Main";
import OurServices from "../../components/OurServices/OurServices";
import OurTechnologies from "../../components/OurTechnologies/OurTechnologies";
import Projects from "../../components/Projects/Projects";

const StyledHome = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 75px); /*header height ajustment*/

  background-color: #0b2038;
`;

export default function Home() {
  return (
    <StyledHome>
      <Main />
      <OurServices />
      <OurTechnologies />
      <Projects />
    </StyledHome>
  );
}
