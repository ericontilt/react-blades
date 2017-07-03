import React from 'react';
import { shallow } from 'enzyme';
import getContext from '../stubs/contextStub';
import BladeToolbar from '../../src/js/components/BladeToolbar';

describe('BladeToolbar', () => {
  describe('#render', () => {
    it('is a .BladeToolbar', () => {
      const wrapper = shallow(<BladeToolbar />, {
        context: getContext(),
      });
      expect(wrapper.is('.BladeToolbar')).toBeTruthy();
    });
  });
});
