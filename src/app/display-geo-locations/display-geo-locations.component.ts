import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { GeoName } from "./../store/models/geoname";

@Component({
  selector: "display-geo-locations",
  templateUrl: "./display-geo-locations.component.html",
  styleUrls: ["./display-geo-locations.component.scss"],
})
export class DisplayGeoLocationsComponent implements OnInit {
  listOfLocations: GeoName;
  result: GeoName;
  constructor(private store: Store<any>) {
    store.pipe(select("geoName")).subscribe((res) => {
      this.listOfLocations = res.history;
      this.result = res.result;
    });
  }

  ngOnInit() {}
}
