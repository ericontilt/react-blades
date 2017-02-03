import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon-sandbox';
import { shallow } from 'enzyme';
import BladeActionButton from '../../src/js/components/BladeActionButton';

describe('BladeActionButton', () => {
  describe('#render', () => {
    it('is .BladeActionButton class', () => {
      const action = { id: 'btn' };
      const wrapper = shallow(<BladeActionButton {...action} />);
      expect(wrapper.is('.BladeActionButton')).to.equal(true);
    });

    describe('props.title has a value', () => {
      it('has .BladeActionButton_title class', () => {
        const title = 'test';
        const action = { id: 'btn', title };
        const wrapper = shallow(<BladeActionButton {...action} />);
        expect(wrapper.find('.BladeActionButton_title')).to.have.length(1);
      });

      it('renders title text', () => {
        const title = 'test';
        const action = { id: 'btn', title };
        const wrapper = shallow(<BladeActionButton {...action} />);
        expect(wrapper.find('.BladeActionButton_title').text()).to.equal(title);
      });
    });

    describe('props.isEnabled === true', () => {
      it('renders .BladeActionButton__button class', () => {
        const action = { id: 'btn', isEnabled: true };
        const wrapper = shallow(<BladeActionButton {...action} />);
        expect(wrapper.find('.BladeActionButton__button')).to.have.length(1);
      });
    });

    describe('props.isEnabled === false', () => {
      it('renders .BladeActionButton__button--disabled class', () => {
        const action = { id: 'btn', isEnabled: false };
        const wrapper = shallow(<BladeActionButton {...action} />);
        expect(wrapper.find('.BladeActionButton__button--disabled')).to.have.length(1);
      });
    });

    describe('props.toggled === true', () => {
      it('renders .BladeActionButton__button--toggled class', () => {
        const action = { id: 'btn', isToggled: true };
        const wrapper = shallow(<BladeActionButton {...action} />);
        expect(wrapper.find('.BladeActionButton__button--toggled')).to.have.length(1);
      });
    });

    describe('props.onClick with callback handler', () => {
      it('attaches click handler to button', () => {
        let onClickSpy = sinon.spy();
        const action = { id: 'btn', onClick: onClickSpy };
        const wrapper = shallow(<BladeActionButton {...action} />);
        wrapper.find('button').simulate('click');
        expect(onClickSpy.getCall(0).args[1]).to.deep.equal({ id: 'btn' });
      });
    });

    describe('props.tooltip has some text', () => {
      it('renders the tooltip on the button', () => {
        const tooltip = 'test';
        const action = { id: 'btn', tooltip };
        const wrapper = shallow(<BladeActionButton {...action} />);
        expect(wrapper.find('button').prop('title')).to.eq(tooltip);
      });
    });

    describe('props.iconClass has a value', () => {
      it('renders the icon', () => {
        const iconClass = 'test';
        const action = { id: 'btn', iconClass };
        const wrapper = shallow(<BladeActionButton {...action} />);
        expect(wrapper.find('.test')).to.have.length(1);
      });
    });
  });
});
