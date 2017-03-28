import React, { PropTypes } from 'react';

import styles from './styles.css';

const Step = props => {
  const { title, subtitle, active } = props;
  return (
    <div className={`${styles.step} ${active ? styles.active : ''}`}>
      <div className={styles['step-title']}>{title}</div>
      <div className={styles['step-subtitle']}>{subtitle}</div>
    </div>
  );
};

Step.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  active: PropTypes.bool,
};

export default Step;
