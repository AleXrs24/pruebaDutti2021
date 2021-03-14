import { createReducer, on } from '@ngrx/store';
import { loadShipsSuccess,  loadShipsFailure }  from './ship.actions';

export const shipFeatureKey = 'ship';

export interface ShipState {
  data: any;
  error: any;
}

export const initialState: ShipState = {
  data: null,
  error: null
};


export const shipReducer = createReducer(
  initialState,
  on(loadShipsSuccess, (state, action) => ({ data: action.data, error: null })),
  on(loadShipsFailure, (state, action) => ({ error: action.error, data: null })),
);

