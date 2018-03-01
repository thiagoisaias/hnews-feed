import React from "react";
import TableItem from "./TableItem";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  padding: 16px;
  background-color: #f6f6ef;
  margin-top: 130px;
`;

const Table = props => {
  const { list } = props;
  return (
    <Container>
      {list.map(item => <TableItem key={item.objectID} {...item} />)}
    </Container>
  );
};

Table.propTypes = {
  list: PropTypes.array.isRequired
};

export default Table;
