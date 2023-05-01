import { TestBed } from '@angular/core/testing';

import { ServiceconcesionarioService } from './serviceconcesionario.service';

describe('ServiceconcesionarioService', () => {
  let service: ServiceconcesionarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceconcesionarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
