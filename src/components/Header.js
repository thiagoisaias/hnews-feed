import React from "react";
import styled from "styled-components";
import Search from "./Search";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 70px;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #333;
  position: fixed;
  top: 0;
`;

const Header = props => {
  return (
    <Container>
      <Search {...props} />
    </Container>
  );
};

export default Header;
