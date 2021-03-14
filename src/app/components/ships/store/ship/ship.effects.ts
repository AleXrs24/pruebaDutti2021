import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as ShipActions from './ship.actions';
import { ShipsService } from 'src/app/services/ships.service';



@Injectable()
export class ShipEffects {

  loadShips$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(ShipActions.loadShips),
      tap(() => { console.log('Ship Api in queue'); }),
      mergeMap((action) => {
        console.log('Ship api in progress');
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        return this.shipsService.getShips(action.page).pipe(
          map(res => ShipActions.loadShipsSuccess({ data: res })),
          catchError(error => of(ShipActions.loadShipsFailure({ error }))),
          tap(() => { console.log('Ship end'); })
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private shipsService: ShipsService
  ) {}

}
