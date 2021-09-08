import { TestBed } from '@angular/core/testing';

import { LegalMovementsAccessService } from './legal-movements-access.service';

describe('LegalMovementsAccessService', () => {
  let service: LegalMovementsAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegalMovementsAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
