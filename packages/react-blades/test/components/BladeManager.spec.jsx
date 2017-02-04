import BladeManager from '../../src/js/components/BladeManager';

describe('BladeManager', () => {
  describe('#constructor', () => {
    it('initializes with an empty blade collection', () => {
      const manager = new BladeManager();
      expect(manager.getVisible().length).toBe(0);
    });
  });

  describe('#add', () => {
    let manager;

    beforeEach(() => {
      manager = new BladeManager();
      spyOn(manager, 'trigger');
    });

    it('throws if blade id is missing', () => {
      expect(() => manager.add({})).toThrowError('A blade id is mandatory.');
    });

    it('triggers the render event after adding the blade', () => {
      manager.add({ id: 'test' });
    });

    describe('#getVisible', () => {
      it('returns visible blades only', () => {
        manager.add({ id: 'visible', isVisible: true });
        manager.add({ id: 'invisible', isVisible: false });
        expect(manager.getVisible().length).toBe(1);
      });

      it('blades have the correct dimensions and offsets', () => {
        manager.add({ id: 'visible1', isVisible: true, width: 100 });
        manager.add({ id: 'visible2', isVisible: true, width: 200 });
        expect(manager.getVisible()[0].width).toBe(100);
        expect(manager.getVisible()[0].left).toBe(0);
        expect(manager.getVisible()[1].width).toBe(200);
        expect(manager.getVisible()[1].left).toBe(100);
      });
    });
  });
});
