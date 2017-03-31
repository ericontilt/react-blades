import React from 'react';
import { shallow } from 'enzyme';
import BladeContainer from '../../src/js/components/BladeContainer';

describe('BladeContainer', () => {
  it('#render', () => {
    const wrapper = shallow(
      <BladeContainer />,
    );
  });
});
