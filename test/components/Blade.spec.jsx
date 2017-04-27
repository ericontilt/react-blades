import React from 'react';
import { shallow } from 'enzyme';
import Blade from '../../src/js/components/Blade';

describe('Blade', () => {
  describe('#render', () => {
    it('is .Blade', () => {
      const wrapper = shallow(<Blade />);
      expect(wrapper.is('.Blade')).toEqual(true);
    });

    it('applies className', () => {
      const wrapper = shallow(<Blade className="Test" />);
      expect(wrapper.is('.Blade')).toEqual(true);
      expect(wrapper.is('.Test')).toEqual(true);
    });

    it('renders children', () => {
      const wrapper = shallow(
        <Blade className="Test">
          <div className="ChildComponent" />
        </Blade>,
      );
      expect(wrapper.children().length).toEqual(1);
    });
  });
});
