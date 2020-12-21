import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCounselingComponent } from './banner-counseling.component';

describe('BannerCounselingComponent', () => {
  let component: BannerCounselingComponent;
  let fixture: ComponentFixture<BannerCounselingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerCounselingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCounselingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
