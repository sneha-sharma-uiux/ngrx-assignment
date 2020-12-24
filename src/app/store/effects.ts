import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes } from './actions';
import { CommonServiceService } from '../common-service.service';

@Injectable()
export class ShopEffects {
  @Effect()
  loadPhotos$ = this.actions$.pipe(
    ofType(ActionTypes.LoadItems),
    mergeMap(() =>
      this.commonService.getPhotos().pipe(
        map(items => {
          return { type: ActionTypes.LoadSuccess, payload: items };
        }),
        catchError(() => EMPTY)
      )
    )
  );

  constructor(
    private actions$: Actions,
    private commonService: CommonServiceService
  ) {}
}
