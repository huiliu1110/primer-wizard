import React from 'react';
import renderer from 'react-test-renderer';

import Step from '../Step';

it('renders a Step component', () => {
  const props = {
    title: 'Sample Test',
    subtitle: 'Sample Subtitle',
    active: false,
  };

  const tree = renderer.create(<Step {...props} />);
  expect(tree).toMatchSnapshot();
});
