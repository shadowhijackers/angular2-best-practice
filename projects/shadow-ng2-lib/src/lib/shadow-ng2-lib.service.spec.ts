import { TestBed } from '@angular/core/testing';

import { ShadowNg2LibService } from './shadow-ng2-lib.service';

describe('ShadowNg2LibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShadowNg2LibService = TestBed.get(ShadowNg2LibService);
    expect(service).toBeTruthy();
  });
});
