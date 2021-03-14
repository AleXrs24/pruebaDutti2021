import { createAction, props } from '@ngrx/store';

export const loadShips = createAction(
  '[Ship] Load Ships',
  props<{ page?: number }>()
);

export const loadShipsSuccess = createAction(
  '[Ship] Load Ships Success',
  props<{ data: any }>()
);

export const loadShipsFailure = createAction(
  '[Ship] Load Ships Failure',
  props<{ error: any }>()
);
