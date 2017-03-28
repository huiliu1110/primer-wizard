import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import WizardContent from './components/WizardContent';
import styles from './styles.css';

class Wizard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 0,
    };
  }

  _handleStepChange = change => {
    const { currentStep } = this.state;

    this.setState({
      currentStep: currentStep + change,
    });
  };

  render() {
    const { currentStep } = this.state;
    const { children, onSubmit, disabled } = this.props;

    return (
      <div className={`${styles.wizard} ${disabled ? styles.disabled : ''}`}>
        <WizardContent
          steps={children}
          onSubmit={onSubmit}
          currentStep={currentStep}
          changeStep={this._handleStepChange}
        >
          {children}
        </WizardContent>
      </div>
    );
  }
}

Wizard.propTypes = {
  children: PropTypes.array.isRequired,
  onSubmit: PropTypes.func,
  disabled: PropTypes.bool,
};

const mapStateToProps = (state, ownProps) => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Wizard);
