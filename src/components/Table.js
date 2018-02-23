import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Table = props => {
  const { list, onDismiss } = props;
  return (
    <Fragment>
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
    </Fragment>
  );
};

Table.propTypes = {
  list: PropTypes.array.isRequired,
  onDismiss: PropTypes.func.isRequired
};

export default Table;
