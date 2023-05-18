import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1EjercicioQueenComponent } from './comp1-ejercicio-queen.component';

describe('Comp1EjercicioQueenComponent', () => {
  let component: Comp1EjercicioQueenComponent;
  let fixture: ComponentFixture<Comp1EjercicioQueenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp1EjercicioQueenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comp1EjercicioQueenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
