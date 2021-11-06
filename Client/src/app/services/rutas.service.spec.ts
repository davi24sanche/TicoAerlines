import { TestBed } from '@angular/core/testing';

import { RutaService } from './rutas.service';

describe('PostService', () => {
  let service: RutaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RutaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
