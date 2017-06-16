import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  // Indicamos los componentes pipes y directivas de la app
  declarations: [
    AppComponent
  ],
  // Importamos modulos que necesita la aplicacion
  imports: [
    BrowserModule
  ],
  // Indicamos los proveedores de las piezas que sean susceptibles de que sean inyectadas como dependencias
  providers: [],
  // Es el modulo raiz de la aplicacion que es con la que arranca la aplicacion. 
  bootstrap: [AppComponent]
})
export class AppModule { }
