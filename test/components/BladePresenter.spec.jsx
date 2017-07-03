import React from 'react';
import { shallow } from 'enzyme';
import getContext from '../stubs/contextStub';
import BladePresenter from '../../src/js/components/BladePresenter';

describe('BladePresenter', () => {
  describe('#render', () => {
    it('is .BladePresenter', () => {
      const wrapper = shallow(<BladePresenter />, {
        context: getContext(),
      });
      expect(wrapper.is('.BladePresenter')).toEqual(true);
    });

    describe('#getVisible', () => {
      it('renders a BladeContainer for each blade', () => {
        const wrapper = shallow(<BladePresenter />, {
          context: getContext({
            bladeManager: {
              getAll: () => ([{
                id: 'A',
                component: { type: () => { } },
                width: 100,
                left: 0,
              }, {
                id: 'B',
                component: { type: () => { } },
                width: 200,
                left: 100,
              }]),
            },
          }),
        });
        expect(wrapper.find('BladeContainer').length).toBe(2);
      });
    });
  });
});
