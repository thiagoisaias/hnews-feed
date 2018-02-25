import React from "react";
import TableItem from "./TableItem";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  padding: 16px;
  background-color: #f6f6ef;
  margin-top: 80px;
`;

const Table = props => {
  return (
    <Container>
      {props.list.map(item => (
        <TableItem key={item.objectID} onDismiss={props.onDismiss} {...item} />
      ))}
    </Container>
  );
};

Table.propTypes = {
  list: PropTypes.array.isRequired,
  onDismiss: PropTypes.func.isRequired
};

export default Table;
