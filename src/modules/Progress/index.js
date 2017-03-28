import React, { PropTypes } from 'react';

import styles from './styles.css';
import Step from './Step';

const Progress = props => {
  let { children, activeKey } = props;
  if (!activeKey) {
    activeKey = 0;
  }

  return (
    <div className={`${styles['progress-bar']}`}>
      {children.map((step, i) => {
        const { props } = step;
        return <Step key={i} active={activeKey === i} {...props} />;
      })}
    </div>
  );
};

Progress.propTypes = {
  children: PropTypes.array.isRequired,
  activeKey: PropTypes.number.isRequired,
};

export default Progress;
