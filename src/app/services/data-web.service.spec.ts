import { TestBed } from '@angular/core/testing';

import { DataWebService } from './data-web.service';

describe('DataWebService', () => {
  let service: DataWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
