import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounselingDetailsComponent } from './counseling-details.component';

describe('CounselingDetailsComponent', () => {
  let component: CounselingDetailsComponent;
  let fixture: ComponentFixture<CounselingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounselingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounselingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
