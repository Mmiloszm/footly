import { TestBed } from '@angular/core/testing';

import { ShareSelectedTeamService } from './share-selected-team.service';

describe('ShareSelectedTeamService', () => {
  let service: ShareSelectedTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareSelectedTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
