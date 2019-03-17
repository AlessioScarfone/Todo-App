import { TestBed, inject } from '@angular/core/testing';

import { CRUDService } from './crud.service';

describe('CRUDService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CRUDService]
    });
  });

  it('should be created', inject([CRUDService], (service: CRUDService) => {
    expect(service).toBeTruthy();
  }));
});
