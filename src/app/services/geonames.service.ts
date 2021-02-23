import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { longAndLat } from "./../store/models/geoname";

@Injectable({
  providedIn: "root",
})
export class GeonamesService {
  constructor(private http: HttpClient) {}
  sendPostRequest(data: longAndLat): Observable<any> {
    let api =
      "http://api.geonames.org/addressJSON?lat=" +
      data.latitude +
      "&lng=" +
      data.longitude +
      "&username=samninder";
    return this.http.get<longAndLat>(api);
  }
}
