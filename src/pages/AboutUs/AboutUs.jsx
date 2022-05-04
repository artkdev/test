import React, { useEffect } from "react";
import styled from "styled-components";
import { Company } from "../../components/Company/Company";
import { Team } from "../../components/Team/Team";

const StyledAboutUs = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 75px;
  min-height: 100vh; /*header height ajustment*/

  background-color: #0b2038;
`;
export default function AboutUs() {
  return (
    <StyledAboutUs>
      <Company />
      <Team />
    </StyledAboutUs>
  );
}
