import { TestBed } from '@angular/core/testing';

import { SetupConferencesService } from './setup-conferences.service';

describe('SetupConferencesService', () => {
  let service: SetupConferencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupConferencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
