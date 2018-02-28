import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 50px;
  height: 50px;
  margin: 32px auto;
`;

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  width: 50px;
  height: 50px;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -125;
    }
  }
`;

const StyledCircle = styled.circle`
  stroke: #777;
  stroke-linecap: round;
  stroke-width: 1.725;
  animation: dash 1.5s ease-in-out infinite;
`;

const Spinner = props => {
  return (
    <Container>
      <StyledSpinner viewBox="0 0 50 50">
        <StyledCircle cx="25" cy="25" r="15" fill="none" />
      </StyledSpinner>
    </Container>
  );
};

export default Spinner;
