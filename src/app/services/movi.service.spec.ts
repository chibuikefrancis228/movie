import { TestBed } from '@angular/core/testing';

import { MoviService } from './movi.service';

describe('MoviService', () => {
  let service: MoviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
