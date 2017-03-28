import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { WizardActions } from '../../redux/Wizard';
import Sample from '../Sample';
import Wizard from '../Wizard';

class Home extends Component {
  render() {
    const { wizard, storeData, saveData, loading, status } = this.props;

    const steps = [0, 1, 2].map(i => (
      <Sample
        key={i}
        title={`Step ${i + 1}`}
        subtitle={`Description for ${i + 1}`}
        onChange={e => storeData({ [i]: e.target.value })}
        data={wizard[i]}
      />
    ));

    return (
      <div>
        <Wizard onSubmit={saveData} disabled={loading}>
          {steps}
        </Wizard>
        <div style={{ textAlign: 'center' }}>
          {loading ? 'Loading...' : null}
          {status}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  wizard: PropTypes.object,
  storeData: PropTypes.func,
  saveData: PropTypes.func,
  loading: PropTypes.bool,
  status: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => ({
  wizard: state.wizard,
  loading: state.ui.loading,
  status: state.ui.status,
});

const mapDispatchToProps = dispatch => ({
  storeData: payload => dispatch(WizardActions.storeData(payload)),
  saveData: () => dispatch(WizardActions.saveData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
