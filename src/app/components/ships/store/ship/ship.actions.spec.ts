import * as fromShip from './ship.actions';

describe('loadShips', () => {
  it('should return an action', () => {
    expect(fromShip.loadShips().type).toBe('[Ship] Load Ships');
  });
});
