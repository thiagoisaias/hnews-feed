import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormInput = styled.input`
  border: none;
  outline: none;
  padding: 12px;
  margin: 0 8px;
  color: #333;
  @media (max-width: 425px) {
    width: 180px;
  }
  @media (min-width: 426px) {
    width: 300px;
  }
`;

const FormButton = styled.button`
  border: none;
  color: #fff;
  background-color: lightsalmon;
  padding: 12px;
  outline: none;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;


const Search = props => {
  const { value, onChange, onSubmit } = props;
  return (
    <FormContainer onSubmit={onSubmit}>
      <FormInput type="text" value={value} onChange={onChange} />
      <FormButton type="submit"> Search </FormButton>
    </FormContainer>
  );
};

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Search;
