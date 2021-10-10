import { TestBed } from '@angular/core/testing';

import { CheckLogoutGuard } from './check-logout.guard';

describe('CheckLogoutGuard', () => {
  let guard: CheckLogoutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckLogoutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
