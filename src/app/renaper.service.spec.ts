import { TestBed } from '@angular/core/testing';

import { RENAPERService } from './renaper.service';


describe('RENAPERService', () => {
  let service: RENAPERService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RENAPERService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
