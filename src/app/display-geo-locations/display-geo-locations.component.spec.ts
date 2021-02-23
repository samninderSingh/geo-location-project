import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGeoLocationsComponent } from './display-geo-locations.component';

describe('DisplayGeoLocationsComponent', () => {
  let component: DisplayGeoLocationsComponent;
  let fixture: ComponentFixture<DisplayGeoLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayGeoLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayGeoLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
