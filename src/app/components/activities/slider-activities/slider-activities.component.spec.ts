import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderActivitiesComponent } from './slider-activities.component';

describe('SliderActivitiesComponent', () => {
  let component: SliderActivitiesComponent;
  let fixture: ComponentFixture<SliderActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
