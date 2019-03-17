import { TestBed, inject } from '@angular/core/testing';

import { TitleGeneratorService } from './title-generator.service';

describe('TitleGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TitleGeneratorService]
    });
  });

  it('should be created', inject([TitleGeneratorService], (service: TitleGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
