import { TestBed } from '@angular/core/testing';

import { DiretivaNgidService } from './diretiva-ngid.service';

describe('DiretivaNgidService', () => {
  let service: DiretivaNgidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiretivaNgidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
