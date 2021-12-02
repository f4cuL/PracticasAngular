import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmpleadosComponent } from './empleados/empleados.component';

import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';

@NgModule({
  declarations: [		
    AppComponent,
    EmpleadosComponent,
    EmpleadoComponent
   ],
  imports: [
    BrowserModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
