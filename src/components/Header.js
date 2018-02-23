import React from "react";
import styled from "styled-components";
import Search from "./Search";
import LogoImagePath from "../images/logo-hn.png";

const Container = styled.div`
  width: 100%;
  max-width: 900px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  position: fixed;
  top: 0;
`;

const LogoLink = styled.a`
  line-height: 0;
  display: block;
  position: absolute;
  left: 32px;
  &:hover {
    opacity: 1;
  }
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Header = props => {
  return (
    <Container>
      <LogoLink href="/"><LogoImage src={LogoImagePath} /></LogoLink>
      <Search {...props} />
    </Container>
  );
};

export default Header;
