import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableConcesionariosComponent } from './table-concesionarios.component';

describe('TableConcesionariosComponent', () => {
  let component: TableConcesionariosComponent;
  let fixture: ComponentFixture<TableConcesionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableConcesionariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableConcesionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
