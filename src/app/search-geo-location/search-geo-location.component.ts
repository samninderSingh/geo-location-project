import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import {
  searchLocation,
  updateResult,
} from "./../store/actions/geoName.action";
import { GeoName } from "../store/models/geoname";

@Component({
  selector: "search-geo-location",
  templateUrl: "./search-geo-location.component.html",
  styleUrls: ["./search-geo-location.component.scss"],
})
export class SearchGeoLocationComponent implements OnInit {
  latAndLng = [
    { lat: "0", lng: "0" },
    { lat: "44.67817135628827", lng: "-99.9653146351437" },
    { lat: "50.27541175459233", lng: "21.437888323248753" },
    { lat: "52.358", lng: "4.881" },
    { lat: "50.089752195361704", lng: "18.852083986282235" },
    { lat: "51.19299424267694", lng: "15.40383045813389" },
  ];
  listOfLocations;
  errorMsg: String;
  isFound: boolean = false;
  GeoLocationForm = this.fb.group({
    latitude: ["", Validators.required],
    longitude: ["", Validators.required],
  });
  constructor(private store: Store<any>, private fb: FormBuilder) {
    store.pipe(select("geoName")).subscribe((res) => {
      this.listOfLocations = res.history;
      this.errorMsg =
        res.errorMsg !== null
          ? res.errorMsg?.status?.message
          : (this.errorMsg = null);
    });
  }

  ngOnInit() {}

  onSubmit() {
    let formValues = this.GeoLocationForm.value;
    let objs = this.listOfLocations;
    let index = 0;
    // we checked here the lat and lng present
    if (objs.length)
      for (let i = 0; i < objs.length; i++) {
        // i have to compare the int value only because enter lat 50.08748059313719 lng: 18.60238105583173 then the output lat,lng are diffrent so i can't compare the decimal numbers, even i have tried to .toFixed(2) as well, but didn't work
        if (
          parseInt(objs[i].address.lat) == parseInt(formValues.latitude) &&
          parseInt(objs[i].address.lng) == parseInt(formValues.longitude)
        ) {
          index = i;
          this.isFound = true;
          break;
        } else this.isFound = false;
      }
    if (!this.isFound) this.store.dispatch(searchLocation(formValues));
    else {
      this.store.dispatch(updateResult(objs[index]));
    }
    this.GeoLocationForm.reset();
  }
}
