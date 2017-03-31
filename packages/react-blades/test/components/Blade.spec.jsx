import React from 'react';
import { shallow } from 'enzyme';
import Blade from '../../src/js/components/Blade';

describe('Blade', () => {
  describe('#render', () => {
    it('is .Blade', () => {
      const visibleBlades = {
        blades: {
        },
      };
      const wrapper = shallow(<Blade />, {
        context: visibleBlades,
      });
      expect(wrapper.is('.Blade')).toEqual(true);
    });

    it('applies className', () => {
      const visibleBlades = {
        blades: {
        },
      };
      const wrapper = shallow(<Blade className="Test" />, {
        context: visibleBlades,
      });
      expect(wrapper.is('.Blade')).toEqual(true);
      expect(wrapper.is('.Test')).toEqual(true);
    });
  });
});
