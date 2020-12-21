import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerMotiveComponent } from './prayer-motive.component';

describe('PrayerMotiveComponent', () => {
  let component: PrayerMotiveComponent;
  let fixture: ComponentFixture<PrayerMotiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerMotiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerMotiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
