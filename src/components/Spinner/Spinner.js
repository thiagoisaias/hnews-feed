import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  width: ${props => props.width || "24px"};
  height: ${props => props.height || "24px"};

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
  stroke: #999;
  stroke-linecap: round;
  stroke-width: 2.5;
  animation: dash 1.5s ease-in-out infinite;
`;

const Spinner = props => {
  const { width, height } = props;
  return (
    <Container>
      <StyledSpinner width={width} height={height} viewBox={`0 0 ${width*2} ${height*2}`}>
        <StyledCircle cx={width} cy={height} r={width / 2} fill="none" />
      </StyledSpinner>
    </Container>
  );
};

Spinner.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default Spinner;
