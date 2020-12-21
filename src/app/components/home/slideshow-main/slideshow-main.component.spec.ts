import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowMainComponent } from './slideshow-main.component';

describe('SlideshowMainComponent', () => {
  let component: SlideshowMainComponent;
  let fixture: ComponentFixture<SlideshowMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideshowMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideshowMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
