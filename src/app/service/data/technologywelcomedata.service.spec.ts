import { TestBed } from '@angular/core/testing';

import { TechnologywelcomedataService } from './technologywelcomedata.service';

describe('TechnologywelcomedataService', () => {
  let service: TechnologywelcomedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnologywelcomedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
