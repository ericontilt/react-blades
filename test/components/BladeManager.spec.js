import BladeManager from '../../src/js/components/BladeManager';

describe('BladeManager', () => {
  let manager;

  beforeEach(() => {
    manager = new BladeManager();
  });

  describe('#constructor', () => {
    it('initializes with an empty blade collection', () => {
      expect(manager.getVisible().length).toBe(0);
    });
  });

  describe('#add', () => {
    it('throws if blade (with id) is missing', () => {
      expect(() => manager.add(null)).toThrowError(/id is mandatory/i);
      expect(() => manager.add(undefined)).toThrowError(/id is mandatory/i);
      expect(() => manager.add({})).toThrowError(/id is mandatory/i);
    });

    it('throws if blade id already exists', () => {
      manager.add({ id: 'test' });
      expect(() => manager.add({ id: 'test' })).toThrowError(/already exists/i);
    });

    it('throws if blade width is not a number', () => {
      expect(() => manager.add({ id: 'test', width: 'abc' })).toThrowError(/numerical value/i);
    });

    it('adds the blade to the collection with default props', () => {
      manager.add({ id: 'new' });
      const visibleBlades = manager.getVisible();
      expect(visibleBlades.length).toBe(1);
      expect(visibleBlades[0].width).toBe(300);
      expect(visibleBlades[0].depth).toBe(0);
      expect(visibleBlades[0].isActive).toBeTruthy();
      expect(visibleBlades[0].isVisible).toBeTruthy();
    });

    it('adds to blade the collection with override props', () => {
      const blade = {
        id: 'new',
        width: 500,
        depth: 3,
      };
      manager.add(blade);

      const visibleBlades = manager.getVisible();
      expect(visibleBlades.length).toBe(1);
      expect(visibleBlades[0].width).toBe(500);
      expect(visibleBlades[0].depth).toBe(3);
      expect(visibleBlades[0].isActive).toBeTruthy();
      expect(visibleBlades[0].isVisible).toBeTruthy();
    });

    it('activates most recently added blade, deactivating other blades', () => {
      manager.add({ id: 'visible1', isVisible: true, isActive: true });
      manager.add({ id: 'visible2', isVisible: true, isActive: true });
      const blades = manager.getVisible();
      expect(blades[0].isActive).toBeFalsy();
      expect(blades[1].isActive).toBeTruthy();
    });

    it('triggers the render event after adding the blade', () => {
      manager.add({ id: 'test' });
    });

    describe('when adding blade with depth', () => {
      it('updates isVisible correctly for blades with depth', () => {
        manager.add({
          id: '1',
          width: 100,
        });
        manager.add({
          id: '2',
          width: 100,
        });
        manager.add({
          id: '3',
          width: 100,
          depth: 1,
        });
        manager.add({
          id: '4',
          width: 100,
        });
        manager.add({
          id: '5',
          width: 100,
          depth: 1,
        });
        expect(manager.getVisible().length).toEqual(1);
        expect(manager.getVisible()[0].id).toEqual('5');
      });
    });
  });

  describe('#remove', () => {
    beforeEach(() => {
      manager.add({ id: 'visible1', isVisible: true, width: 100 });
      manager.add({ id: 'visible2', isVisible: true, width: 200 });
    });

    it('will not throw if the given ID does not exist', () => {
      expect(() => manager.remove('nonexistent')).not.toThrow();
    });

    it('removes the blade from the collection', () => {
      manager.remove('visible2');
      expect(manager.getVisible().length).toBe(1);
    });

    it('removes any blade following the removed blade from the collection', () => {
      manager.remove('visible1');
      expect(manager.getVisible().length).toBe(0);
    });

    it('activates the last blade in the collection', () => {
      manager.remove('visible2');
      expect(manager.getVisible()[0].isActive).toBeTruthy();
    });

    it('triggers a render', () => {
      spyOn(manager, 'trigger');
      manager.remove('visible2');
      expect(manager.trigger).toHaveBeenCalledWith('render');
    });
  });

  describe('#back', () => {
    beforeEach(() => {
      manager.add({ id: 'visible1', isVisible: true, width: 100 });
      manager.add({ id: 'visible2', isVisible: true, width: 200 });
      manager.add({ id: 'visible3', isVisible: true, width: 300 });
    });

    it('removes all blades found after id match from collection', () => {
      manager.back('visible1');
      expect(manager.getVisible().length).toBe(1);
      expect(manager.getVisible()[0].id).toBe('visible1');
    });

    it('works for last blade in the collection', () => {
      manager.back('visible3');
      expect(manager.getVisible().length).toBe(3);
    });

    it('pops the last element from the collection if called without an id', () => {
      manager.back();
      const visible = manager.getVisible();
      expect(visible.length).toBe(2);
      expect(visible[0].id).toBe('visible1');
      expect(visible[1].id).toBe('visible2');
    });

    it('activates the last blade in the collection', () => {
      manager.back('visible2');
      expect(manager.getVisible()[1].isActive).toBeTruthy();
    });

    it('triggers a render', () => {
      spyOn(manager, 'trigger');
      manager.back();
      expect(manager.trigger).toHaveBeenCalledWith('render');
    });
  });

  describe('#subscribeNavigationPrevented', () => {
    it('registers and removes registration', () => {
      const spy = jest.fn();
      manager.add({ id: 'first' });
      manager.add({ id: 'second' });
      const unsubscribe = manager.on('navigationPrevented', spy);
      const allowNavigation = manager.preventNavigation('second');
      manager.back('first');
      expect(spy.mock.calls.length).toBe(1);
      unsubscribe();
      expect(spy.mock.calls.length).toBe(1);
    });
  });

  describe('#preventNavigation', () => {
    it('result function allows navigation for this blade', () => {
      manager.add({ id: 'first' });
      manager.add({ id: 'second' });
      const allowNavigation = manager.preventNavigation('second');
      allowNavigation();
      manager.back('first');
      expect(manager.getVisible().length).toBe(1);
    });

    it('works with back()', () => {
      const spy = jest.fn();
      manager.add({ id: 'first' });
      manager.add({ id: 'second' });
      manager.on('navigationPrevented', spy);
      const allowNavigation = manager.preventNavigation('second');
      manager.back('first');
      expect(spy.mock.calls.length).toBe(1);
      expect(spy.mock.calls[0][0].id).toBe('second');
      expect(manager.getVisible().length).toBe(2);
    });

    it('works with remove()', () => {
      const spy = jest.fn();
      manager.add({ id: 'first' });
      manager.add({ id: 'second' });
      manager.on('navigationPrevented', spy);
      const allowNavigation = manager.preventNavigation('second');
      manager.remove('second');
      expect(spy.mock.calls.length).toBe(1);
      expect(spy.mock.calls[0][0].id).toBe('second');
      expect(manager.getVisible().length).toBe(2);
    });
  });
});
