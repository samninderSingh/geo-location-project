import { Action, createAction, props } from "@ngrx/store";
import { geoNameActionType } from "./../../shared/enum/geoName-action-types.enum";
import { GeoName, longAndLat } from "./../models/geoname";

export class GeoActionParent implements Action {
  type: any;
  payload: any;
}

export class GeoError implements GeoActionParent {
  type = geoNameActionType.error;
  constructor(public payload: any) {}
}
export class AddNewLocationAction implements GeoActionParent {
  type = geoNameActionType.Add;
  constructor(public payload: any) {}
}
export const searchLocation = createAction(
  geoNameActionType.search,
  props<longAndLat>()
);
export const updateResult = createAction(
  geoNameActionType.updateResult,
  props<longAndLat>()
);
export const locationSuccess = createAction(
  geoNameActionType.Add,
  props<{ locationInfo: GeoName }>()
);
export const locationFail = createAction(
  geoNameActionType.error,
  props<{ errorMsg: string }>()
);
