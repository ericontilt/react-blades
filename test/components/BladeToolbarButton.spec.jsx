import React from 'react';
import { shallow } from 'enzyme';
import BladeToolbarButton from '../../src/js/components/BladeToolbarButton';

describe('BladeToolbarButton', () => {
  describe('#render', () => {
    it('is .BladeToolbarButton class', () => {
      const action = { id: 'btn' };
      const wrapper = shallow(<BladeToolbarButton {...action} />);
      expect(wrapper.is('.BladeToolbarButton')).toBeTruthy();
    });

    describe('props.title has a value', () => {
      it('has .BladeToolbarButton_title class', () => {
        const title = 'test';
        const action = { id: 'btn', title };
        const wrapper = shallow(<BladeToolbarButton {...action} />);
        expect(wrapper.find('.BladeToolbarButton_title').length).toBe(1);
      });

      it('renders title text', () => {
        const title = 'test';
        const action = { id: 'btn', title };
        const wrapper = shallow(<BladeToolbarButton {...action} />);
        expect(wrapper.find('.BladeToolbarButton_title').text()).toBe(title);
      });
    });

    describe('props.isEnabled === true', () => {
      it('renders .BladeToolbarButton__button class', () => {
        const action = { id: 'btn', isEnabled: true };
        const wrapper = shallow(<BladeToolbarButton {...action} />);
        expect(wrapper.find('.BladeToolbarButton__button').length).toBe(1);
      });
    });

    describe('props.isEnabled === false', () => {
      it('renders .BladeToolbarButton__button--disabled class', () => {
        const action = { id: 'btn', isEnabled: false };
        const wrapper = shallow(<BladeToolbarButton {...action} />);
        expect(wrapper.find('.BladeToolbarButton__button--disabled').length).toBe(1);
      });
    });

    describe('props.toggled === true', () => {
      it('renders .BladeToolbarButton__button--toggled class', () => {
        const action = { id: 'btn', isToggled: true };
        const wrapper = shallow(<BladeToolbarButton {...action} />);
        expect(wrapper.find('.BladeToolbarButton__button--toggled').length).toBe(1);
      });
    });

    describe('props.onClick with callback handler', () => {
      it('attaches click handler to button', () => {
        const onClickSpy = jasmine.createSpy();
        const action = { id: 'btn', onClick: onClickSpy };
        const wrapper = shallow(<BladeToolbarButton {...action} />);
        wrapper.find('button').simulate('click');
        expect(onClickSpy.calls.mostRecent().args[1]).toEqual({ id: 'btn' });
      });
    });

    describe('props.tooltip has some text', () => {
      it('renders the tooltip on the button', () => {
        const tooltip = 'test';
        const action = { id: 'btn', tooltip };
        const wrapper = shallow(<BladeToolbarButton {...action} />);
        expect(wrapper.find('button').prop('title')).toBe(tooltip);
      });
    });

    describe('props.iconClass has a value', () => {
      it('renders the icon', () => {
        const iconClass = 'test';
        const action = { id: 'btn', iconClass };
        const wrapper = shallow(<BladeToolbarButton {...action} />);
        expect(wrapper.find('.test').length).toBe(1);
      });
    });
  });
});
