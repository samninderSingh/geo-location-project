import { GeoActionParent } from "../actions/geoName.action";
import { geoNameActionType } from "./../../shared/enum/geoName-action-types.enum";

export const initialState: any = {
  history: [],
  result: null,
  errorMsg: null,
};

export function GeoNameReducer(state = initialState, action: GeoActionParent) {
  switch (action.type) {
    case geoNameActionType.Add: {
      if (!action["status"] && action["address"]) {
        let len = state.history.length;
        if (len == 5) {
          let arr = [...state.history, action];
          arr.shift();
          return { history: arr, result: action, errorMsg: null };
        }
        return {
          history: [...state.history, action],
          result: action,
          errorMsg: null,
        };
      }
    }
    case geoNameActionType.updateResult: {
      return { history: [...state.history], result: action };
    }
    case geoNameActionType.error: {
      console.log(
        "%c ERROR: Invalid longitude and latitude. Please visit this https://www.geonames.org/maps/addresses.html?address=89512#address to get the correct longitude and latitude",
        "color:red; font-size:16px; font-weight: bold;"
      );
      return { history: [...state.history], result: null, errorMsg: action };
    }
    default:
      return state;
  }
}
