import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardActivitiesComponent } from './card-activities.component';

describe('CardActivitiesComponent', () => {
  let component: CardActivitiesComponent;
  let fixture: ComponentFixture<CardActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
