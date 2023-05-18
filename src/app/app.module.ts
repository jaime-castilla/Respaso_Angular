import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1EjercicioQueenComponent } from './comp1-ejercicio-queen/comp1-ejercicio-queen.component';
import { Comp2TiposdedatosComponent } from './comp2-tiposdedatos/comp2-tiposdedatos.component';
import { Comp3InterpEventComponent } from './comp3-interp-event/comp3-interp-event.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1EjercicioQueenComponent,
    Comp2TiposdedatosComponent,
    Comp3InterpEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
