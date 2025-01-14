import { TestBed } from '@angular/core/testing';

import { PieceRechangeService } from '../services/piece-rechange.service';

describe('PieceRechangeService', () => {
  let service: PieceRechangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PieceRechangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
