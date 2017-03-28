import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Progress from '../../Progress';
import Button from '../../../components/Button';
import Split from '../../../components/Split';

import styles from './styles.css';

class WizardContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 0,
      data: {},
    };
  }

  _renderNav = () => {
    const { children, currentStep, onSubmit, changeStep } = this.props;

    return (
      <div className={styles['wizard-nav']}>
        <Split
          left={
            currentStep !== 0 &&
              <Button
                onClick={() => changeStep(-1)}
                disabled={currentStep <= 0}
                label="Previous"
              />
          }
          right={
            currentStep !== children.length - 1
              ? <Button
                  onClick={() => changeStep(1)}
                  disabled={currentStep >= children.length - 1}
                  label="Next"
                  primary
                />
              : <Button onClick={onSubmit} label="Submit" primary />
          }
        />
      </div>
    );
  };

  render() {
    const { children, currentStep } = this.props;

    return (
      <div className={styles['wizard-container']}>
        <Progress activeKey={currentStep}>
          {children}
        </Progress>
        <div className={styles['content-container']}>
          {children[currentStep]}
          {this._renderNav()}
        </div>
      </div>
    );
  }
}

WizardContent.propTypes = {
  children: PropTypes.array.isRequired,
  currentStep: PropTypes.number.isRequired,
  onSubmit: PropTypes.func,
  changeStep: PropTypes.func,
};

export default connect()(WizardContent);
