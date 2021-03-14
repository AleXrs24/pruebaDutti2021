import { createSelector } from '@ngrx/store';
import { ShipState } from './ship.reducer';

const getError = (state: ShipState): string => state.error;
const getData = (state: ShipState): any => state.data;

export const getStateError = createSelector(
  (state: any) => state.rootState,
  getError
);

export const getStateData = createSelector(
  (state: {shipState: ShipState}) => state.shipState,
  getData
);
