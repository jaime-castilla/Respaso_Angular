import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3InterpEventComponent } from './comp3-interp-event.component';

describe('Comp3InterpEventComponent', () => {
  let component: Comp3InterpEventComponent;
  let fixture: ComponentFixture<Comp3InterpEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp3InterpEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comp3InterpEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
