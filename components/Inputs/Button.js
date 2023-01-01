import React from 'react';

const Button = ({ type, className, children, clickHandler, isDisable }) => {
  return (
    <button
      type={type}
      className={className}
      onClick={clickHandler}
      disabled={isDisable}
    >
      {children}
    </button>
  );
};

export default Button;
