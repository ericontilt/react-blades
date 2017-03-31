import React from 'react';
import { shallow } from 'enzyme';
import BladePresenter from '../../src/js/components/BladePresenter';

describe('BladePresenter', () => {
  describe('#render', () => {
    it('is .BladePresenter', () => {
      const visibleBlades = {
        blades: {
          getVisible: () => ([]),
        },
      };
      const wrapper = shallow(<BladePresenter />, {
        context: visibleBlades,
      });
      expect(wrapper.is('.BladePresenter')).toEqual(true);
    });

    describe('#getVisible', () => {
      it('renders a BladeContainer for each blade', () => {
        const visibleBlades = {
          blades: {
            getVisible: () => ([{
              id: 'A',
              component: { type: () => {} },
              width: 100,
              left: 0,
            }, {
              id: 'B',
              component: { type: () => {} },
              width: 200,
              left: 100,
            }]),
          },
        };
        const wrapper = shallow(<BladePresenter />, {
          context: visibleBlades,
        });
        expect(wrapper.find('BladeContainer').length).toBe(2);
      });
    });
  });
});
