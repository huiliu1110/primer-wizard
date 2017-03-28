import React, { PropTypes } from 'react';

import styles from './styles.css';

const Split = props => {
  const { left, right } = props;

  return (
    <div className={styles['split']}>
      <div className={styles['split-left']}>
        {left}
      </div>
      <div className={styles['split-right']}>
        {right}
      </div>
    </div>
  );
};

Split.propTypes = {
  left: PropTypes.any,
  right: PropTypes.any,
};

export default Split;
