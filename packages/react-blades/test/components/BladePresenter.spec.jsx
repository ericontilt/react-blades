import React from 'react';
import { expect } from 'chai';
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
      expect(wrapper.is('.BladePresenter')).to.equal(true);
    });

    describe('#getVisible', () => {
      it('renders a BladeContainer for each blade', () => {
        const visibleBlades = {
          blades: {
            getVisible: () => ([{
              id: 1,
            }, {
              id: 2,
            }]),
          },
        };
        const wrapper = shallow(<BladePresenter />, {
          context: visibleBlades,
        });
        expect(wrapper.find('BladeContainer')).to.have.length(2);
      });
    });
  });
});
