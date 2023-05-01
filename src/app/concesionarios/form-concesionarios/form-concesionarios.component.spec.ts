import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConcesionariosComponent } from './form-concesionarios.component';

describe('FormConcesionariosComponent', () => {
  let component: FormConcesionariosComponent;
  let fixture: ComponentFixture<FormConcesionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormConcesionariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormConcesionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
