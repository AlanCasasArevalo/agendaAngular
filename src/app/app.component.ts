import { Component, OnInit } from '@angular/core';
/*
Se puede poner o bien como arriba o bien como abajo, sin embaargo lo mas normal es hacerlo como la parte de arriba.
import { Component } from '@angular/core';
import { OnInit } from "@angular/core"
*/
@Component({
  // Indicamos el selector que recoge del html. Es una etiqueta que nosotros nos inventamos y luego la metemos en el index.html.
  selector: 'app-root',
  // Indicamos la ruta al template del componente, se puede hacer todo el HTML en una linea pero no es buena idea. 
  templateUrl: './app.component.html',
  // Indicamos la ruta al CSS del elemento, se puede tener mas de un CSS. Se puede crear el CSS en sin hacer rutas pero es una mala idea
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  title = 'Aplicacion Angular';

  ngOnInit(){
    console.log("Estoy vivo todavia")
  }
}


