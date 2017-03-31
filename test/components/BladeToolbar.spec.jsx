import React from 'react';
import { shallow } from 'enzyme';
import BladeToolbar from '../../src/js/components/BladeToolbar';

describe('BladeToolbar', () => {
  describe('#render', () => {
    it('is a .BladeToolbar', () => {
      const wrapper = shallow(<BladeToolbar />);
      expect(wrapper.is('.BladeToolbar')).toBeTruthy();
    });
  });
});
