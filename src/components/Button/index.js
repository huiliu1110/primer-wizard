import React, { PropTypes } from 'react';

import styles from './styles.css';

const Button = props => {
  const { label, onClick, disabled, primary } = props;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.btn} ${primary ? styles.primary : styles.ghost}`}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
};

export default Button;
