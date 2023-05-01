import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAutomovilesComponent } from './form-automoviles.component';

describe('FormAutomovilesComponent', () => {
  let component: FormAutomovilesComponent;
  let fixture: ComponentFixture<FormAutomovilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAutomovilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAutomovilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
