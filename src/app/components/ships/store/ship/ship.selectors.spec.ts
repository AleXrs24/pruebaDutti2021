import * as fromShip from './ship.reducer';
import { selectShipState } from './ship.selectors';

describe('Ship Selectors', () => {
  it('should select the feature state', () => {
    const result = selectShipState({
      [fromShip.shipFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
