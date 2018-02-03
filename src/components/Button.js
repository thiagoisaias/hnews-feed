import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  const { onClick, children } = props;
  return (
    <button onClick={onClick} type="button">
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Button;
