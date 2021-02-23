import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { GeoNameReducer } from "./store/reducers/geoname.reducer";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { SearchGeoLocationComponent } from "./search-geo-location/search-geo-location.component";
import { DisplayGeoLocationsComponent } from "./display-geo-locations/display-geo-locations.component";
import { EffectsModule } from "@ngrx/effects";
import { GeoLocationEffect } from "./store/effects/geoLocation.effect";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SearchGeoLocationComponent,
    DisplayGeoLocationsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ geoName: GeoNameReducer }),
    EffectsModule.forRoot([GeoLocationEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
