import { TestBed } from '@angular/core/testing';

import { SistemaReglasService } from './sistema-reglas.service';

describe('SistemaReglasService', () => {
  let service: SistemaReglasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SistemaReglasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
