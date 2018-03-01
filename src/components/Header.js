import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Search from "./Search";
import FiltersBar from "./FiltersBar";
import LogoImagePath from "../images/logo-hn.png";


const Container = styled.div`
  width: 100%;
  max-width: 900px;
  position: fixed;
  top: 0;
`;


const TopInnerContainer = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  background-color: #333;
`;

const Title = styled.div`
  color: #fff;
  font-size: 1.25em;
  cursor: default;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  float: left;
  margin: 0 32px;
  @media (max-width: 660px) {
    display: none;
  }
`;

const LogoLink = styled.a`
  line-height: 0;
  &:hover {
    opacity: 1;
  }
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px;
`;

const Header = props => {
  return (
    <Container>
      <TopInnerContainer>
        <LogoContainer>
          <LogoLink href="/">
            <LogoImage src={LogoImagePath} />
          </LogoLink>
          <Title>Hacker News</Title>
        </LogoContainer>
        <Search {...props} />
      </TopInnerContainer>
      <FiltersBar
        sortByDate={props.sortByDate}
        sortByPopularity={props.sortByPopularity}
      />
    </Container>
  );
};

Header.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  sortByDate: PropTypes.func.isRequired,
  sortByPopularity: PropTypes.func.isRequired
};

export default Header;
