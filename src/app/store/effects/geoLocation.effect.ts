import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, catchError, switchMap } from "rxjs/operators";
import { GeonamesService } from "src/app/services/geonames.service";
import { geoNameActionType } from "./../../shared/enum/geoName-action-types.enum";
import * as geoObj from "./../actions/geoName.action";
import { longAndLat } from "./../models/geoname";

@Injectable()
export class GeoLocationEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(geoNameActionType.search),
      switchMap((query: longAndLat) => {
        return this.geonamesService.sendPostRequest(query).pipe(
          map((detail) => {
            if (!detail["status"]) return geoObj.locationSuccess(detail);
            else return geoObj.locationFail(detail);
          }),
          catchError((err) =>
            of(geoObj.locationFail({ errorMsg: err.message }))
          )
        );
      })
    )
  );
  constructor(
    private actions$: Actions,
    private geonamesService: GeonamesService
  ) {}
}
