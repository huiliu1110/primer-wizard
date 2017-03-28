import React from 'react';
import { shallow } from 'enzyme';

import Step from '../Step';

describe('<Step />', () => {
  let props;

  beforeEach(() => {
    props = {
      title: 'Sample Title',
      subtitle: 'Subtitle',
      active: false,
    };
  });

  it('should render a title', () => {
    const wrapper = shallow(<Step {...props} />);
    expect(wrapper.find('.step-title').length).toBe(1);
    expect(wrapper.find('.step-title').text()).toBe('Sample Title');
  });

  it('should render a subtitle', () => {
    const wrapper = shallow(<Step {...props} />);
    expect(wrapper.find('.step-subtitle').length).toBe(1);
    expect(wrapper.find('.step-subtitle').text()).toBe('Subtitle');
  });

  it('should render a Step component as active', () => {
    props.active = true;

    const wrapper = shallow(<Step {...props} />);
    expect(wrapper.find('.active').length).toBe(1);
  });
});
