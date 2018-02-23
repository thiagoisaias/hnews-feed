import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  padding: 32px;
  background-color: #f6f6ef;
  margin-top: 70px;
`;

const Table = props => {
  const { list, onDismiss } = props;
  return (
    <Container>
      {list.map(item => (
        <div key={item.objectID}>
          <div>
            <a href={item.url} rel="noopener noreferrer" target="_blank">
              {item.title}
            </a>
          </div>
          <small>{item.points}</small>
          <div>
            <button onClick={() => onDismiss(item.objectID)}>Dismiss</button>
          </div>
        </div>
      ))}
    </Container>
  );
};

Table.propTypes = {
  list: PropTypes.array.isRequired,
  onDismiss: PropTypes.func.isRequired
};

export default Table;
