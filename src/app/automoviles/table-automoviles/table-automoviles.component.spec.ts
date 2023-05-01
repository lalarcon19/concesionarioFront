import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAutomovilesComponent } from './table-automoviles.component';

describe('TableAutomovilesComponent', () => {
  let component: TableAutomovilesComponent;
  let fixture: ComponentFixture<TableAutomovilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAutomovilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAutomovilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
