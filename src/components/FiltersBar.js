import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1.5px #eee;
`;

const FilterButton = styled.button`
  display: block;
  outline: none;
  cursor: pointer;
  color: #484848;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 6px 12px;
  font-size: 14px;
  margin: 0 8px;

  &:hover {
    background-color: #eee;
  }
`;

const FiltersBar = props => {
  const { sortByDate, sortByPopularity } = props;
  return (
    <Container>
      <FilterButton onClick={sortByPopularity}> Popularity </FilterButton>
      <FilterButton onClick={sortByDate}> Date </FilterButton>
      <FilterButton > Range </FilterButton>
    </Container>
  );
};

FiltersBar.propTypes = {
  sortByDate: PropTypes.func.isRequired,
  sortByPopularity: PropTypes.func.isRequired
};

export default FiltersBar;
