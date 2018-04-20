import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TableItem from "../TableItem/TableItem";

const Container = styled.div`
  padding: 16px;
  background-color: #f6f6ef;
  margin-top: 130px;
`;

const Table = props => {
  const { list, page } = props;
  return (
    <Container>
      {list.map(item => <TableItem key={item.objectID + page} {...item} />)}
    </Container>
  );
};

Table.propTypes = {
  list: PropTypes.array.isRequired
};

export default Table;
