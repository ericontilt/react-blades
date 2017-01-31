import React from 'react';
import { expect } from 'chai';
// import sinon from 'sinon-sandbox';
import { shallow } from 'enzyme';
import BladeActionButton from '../../src/components/BladeActionButton';

describe('BladeActionButton', () => {
  let action;

  beforeEach(() => {
    action = { id: 'btn' };
  });

  describe('#render', () => {
    it('is .BladeActionButton class', () => {
      const wrapper = shallow(<BladeActionButton {...action} />);
      expect(wrapper.is('.BladeActionButton')).to.equal(true);
    });
  });
});
