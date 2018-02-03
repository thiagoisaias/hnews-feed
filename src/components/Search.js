import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Search = props => {
  const { value, onChange, onSubmit, children } = props;
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor=""> Search </label>
      <input type="text" value={value} onChange={onChange} />
      <button type="submit"> {children} </button>
    </form>
  );
};

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Search;
