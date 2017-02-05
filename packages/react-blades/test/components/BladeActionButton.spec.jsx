import React from 'react';
import { shallow } from 'enzyme';
import BladeActionButton from '../../src/js/components/BladeActionButton';

describe('BladeActionButton', () => {
  describe('#render', () => {
    it('is .BladeActionButton class', () => {
      const action = { id: 'btn' };
      const wrapper = shallow(<BladeActionButton {...action} />);
      expect(wrapper.is('.BladeActionButton')).toBeTruthy();
    });

    describe('props.title has a value', () => {
      it('has .BladeActionButton_title class', () => {
        const title = 'test';
        const action = { id: 'btn', title };
        const wrapper = shallow(<BladeActionButton {...action} />);
        expect(wrapper.find('.BladeActionButton_title').length).toBe(1);
      });

      it('renders title text', () => {
        const title = 'test';
        const action = { id: 'btn', title };
        const wrapper = shallow(<BladeActionButton {...action} />);
        expect(wrapper.find('.BladeActionButton_title').text()).toBe(title);
      });
    });

    describe('props.isEnabled === true', () => {
      it('renders .BladeActionButton__button class', () => {
        const action = { id: 'btn', isEnabled: true };
        const wrapper = shallow(<BladeActionButton {...action} />);
        expect(wrapper.find('.BladeActionButton__button').length).toBe(1);
      });
    });

    describe('props.isEnabled === false', () => {
      it('renders .BladeActionButton__button--disabled class', () => {
        const action = { id: 'btn', isEnabled: false };
        const wrapper = shallow(<BladeActionButton {...action} />);
        expect(wrapper.find('.BladeActionButton__button--disabled').length).toBe(1);
      });
    });

    describe('props.toggled === true', () => {
      it('renders .BladeActionButton__button--toggled class', () => {
        const action = { id: 'btn', isToggled: true };
        const wrapper = shallow(<BladeActionButton {...action} />);
        expect(wrapper.find('.BladeActionButton__button--toggled').length).toBe(1);
      });
    });

    describe('props.onClick with callback handler', () => {
      it('attaches click handler to button', () => {
        const onClickSpy = jasmine.createSpy();
        const action = { id: 'btn', onClick: onClickSpy };
        const wrapper = shallow(<BladeActionButton {...action} />);
        wrapper.find('button').simulate('click');
        expect(onClickSpy.calls.mostRecent().args[1]).toEqual({ id: 'btn' });
      });
    });

    describe('props.tooltip has some text', () => {
      it('renders the tooltip on the button', () => {
        const tooltip = 'test';
        const action = { id: 'btn', tooltip };
        const wrapper = shallow(<BladeActionButton {...action} />);
        expect(wrapper.find('button').prop('title')).toBe(tooltip);
      });
    });

    describe('props.iconClass has a value', () => {
      it('renders the icon', () => {
        const iconClass = 'test';
        const action = { id: 'btn', iconClass };
        const wrapper = shallow(<BladeActionButton {...action} />);
        expect(wrapper.find('.test').length).toBe(1);
      });
    });
  });
});
