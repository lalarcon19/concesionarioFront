import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAutomovilesComponent } from './vista-automoviles.component';

describe('VistaAutomovilesComponent', () => {
  let component: VistaAutomovilesComponent;
  let fixture: ComponentFixture<VistaAutomovilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaAutomovilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaAutomovilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
