import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FormContainer = styled.form`
  @media (max-width: 660px) {
    margin: 0 auto;
  }
`;

const FormInput = styled.input`
  height: 40px;
  font-size: 14px;
  line-height: 0;
  border: none;
  border-radius: 3px;
  outline: none;
  padding: 0 12px;
  margin-right: 8px;
  color: #484848;
  cursor: default;

  &::placeholder {
    color: #ccc;
  }

  @media (max-width: 425px) {
    width: 180px;
  }
  @media (min-width: 426px) {
    width: 300px;
  }
`;

const FormButton = styled.button`
  height: 40px;
  font-size: 14px;
  border: none;
  border-radius: 3px;
  color: #fff;
  background-color: #ff742b;
  padding: 12px;
  outline: none;
  &:hover {
    background-color: #fc9055;
    cursor: pointer;
  }
`;

const Search = props => {
  const { value, onChange, onSubmit } = props;
  return (
    <FormContainer onSubmit={onSubmit}>
      <FormInput
        type="text"
        placeholder="Search stories by title, url or author"
        value={value}
        onChange={onChange}
      />
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
