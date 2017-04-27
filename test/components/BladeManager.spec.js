import BladeManager from '../../src/js/components/BladeManager';

describe('BladeManager', () => {
  let manager;

  beforeEach(() => {
    manager = new BladeManager();
    spyOn(manager, 'trigger');
  });

  describe('#constructor', () => {
    it('initializes with an empty blade collection', () => {
      expect(manager.getVisible().length).toBe(0);
    });
  });

  describe('#add', () => {
    it('throws if blade id is missing', () => {
      expect(() => manager.add({})).toThrowError(/id is mandatory/i);
    });

    it('throws if blade id already exists', () => {
      manager.add({ id: 'test' });
      expect(() => manager.add({ id: 'test' })).toThrowError(/already exists/i);
    });

    it('adds to blade the collection', () => {
      manager.add({ id: 'visible', isVisible: true });
      expect(manager.getVisible().length).toBe(1);
    });

    it('recalculates dimensions and offsets', () => {
      manager.add({ id: 'visible1', isVisible: true, width: 100 });
      manager.add({ id: 'visible2', isVisible: true, width: 200 });
      const blades = manager.getVisible();
      expect(blades[0].width).toBe(100);
      expect(blades[0].left).toBe(0);
      expect(blades[1].width).toBe(200);
      expect(blades[1].left).toBe(100);
    });

    it('activates most recently added blade', () => {
      manager.add({ id: 'visible1', isVisible: true, isActive: true });
      manager.add({ id: 'visible2', isVisible: true, isActive: true });
      const blades = manager.getVisible();
      expect(blades[0].isActive).toBeFalsy();
      expect(blades[1].isActive).toBeTruthy();
    });

    it('triggers the render event after adding the blade', () => {
      manager.add({ id: 'test' });
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
  });

  describe('#getVisible', () => {
    it('returns visible blades only', () => {
      manager.add({ id: 'visible', isVisible: true });
      manager.add({ id: 'invisible', isVisible: false });
      expect(manager.getVisible().length).toBe(1);
    });
  });
});
