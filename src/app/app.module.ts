import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoMascotasComponent } from './componentes/listado-mascotas/listado-mascotas.component';
import { MascotaComponent } from './componentes/mascota/mascota.component';
import { CargaMascotaComponent } from './componentes/carga-mascota/carga-mascota.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoMascotasComponent,
    MascotaComponent,
    CargaMascotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
