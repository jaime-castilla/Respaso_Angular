import { Component } from '@angular/core';

@Component({
  selector: 'app-comp2-tiposdedatos',
  templateUrl: './comp2-tiposdedatos.component.html',
  styleUrls: ['./comp2-tiposdedatos.component.css']
})
export class Comp2TiposdedatosComponent {

  ngOnInit(){
    this.imprimirTipos()
  }
  
  imprimirTipos(){

    let numero: number = 1
    let palabras: string = "Jueves"
    let bool: boolean = true
    let simbolo: symbol = Symbol("Sbl")
    let numerogrande: bigint = 2342535235528n
    let indefinido: undefined = undefined
    let nada: null = null

    console.log(numero)
    console.log(palabras)
    console.log(bool)
    console.log(simbolo)
    console.log(numerogrande)
    console.log(indefinido)
    console.log(nada)

  }

}
