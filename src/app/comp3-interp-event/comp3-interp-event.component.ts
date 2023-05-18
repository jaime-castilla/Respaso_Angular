import { Component } from '@angular/core';

@Component({
  selector: 'app-comp3-interp-event',
  templateUrl: './comp3-interp-event.component.html',
  styleUrls: ['./comp3-interp-event.component.css']
})
export class Comp3InterpEventComponent {

  mes: string = "Mayo"
  clickear: boolean = false
  contador: number = 0

  sumar(){

    this.contador++
  }

}
