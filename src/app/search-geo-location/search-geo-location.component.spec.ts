import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGeoLocationComponent } from './search-geo-location.component';

describe('SearchGeoLocationComponent', () => {
  let component: SearchGeoLocationComponent;
  let fixture: ComponentFixture<SearchGeoLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchGeoLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGeoLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
