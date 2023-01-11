import { TestBed } from '@angular/core/testing';

import { TeamsScoresStatsService } from './teams-scores-stats.service';

describe('TeamsScoresStatsService', () => {
  let service: TeamsScoresStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamsScoresStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
