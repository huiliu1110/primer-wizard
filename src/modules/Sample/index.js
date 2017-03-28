import React, { Component, PropTypes } from 'react';

class Sample extends Component {
  render() {
    const { title, data, onChange } = this.props;

    return (
      <div>
        <h3>Content for {title}</h3>
        <p>This is a sample component to demonstrate content.</p>
        <input type="text" onChange={onChange} value={data || ''} />
      </div>
    );
  }
}

Sample.propTypes = {
  title: PropTypes.string,
  data: PropTypes.any,
  onChange: PropTypes.func,
};

export default Sample;
