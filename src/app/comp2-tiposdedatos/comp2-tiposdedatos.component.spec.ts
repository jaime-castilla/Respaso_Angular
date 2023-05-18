import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2TiposdedatosComponent } from './comp2-tiposdedatos.component';

describe('Comp2TiposdedatosComponent', () => {
  let component: Comp2TiposdedatosComponent;
  let fixture: ComponentFixture<Comp2TiposdedatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp2TiposdedatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comp2TiposdedatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
