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
  border-radius: 3px;
  padding: 6px;
  margin: 0 8px;
  color: #333;
`;

const FormButton = styled.button`
  border: none;
  color: #fff;
  background-color: lightsalmon;
  border-radius: 3px;
  padding: 6px;
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
