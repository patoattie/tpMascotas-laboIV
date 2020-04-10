import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CargaMascotaComponent } from './componentes/carga-mascota/carga-mascota.component';
import { ListadoMascotasComponent } from './componentes/listado-mascotas/listado-mascotas.component';
import { MascotaComponent } from './componentes/mascota/mascota.component';
import { ErrorComponent } from './componentes/error/error.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'carga',
    component: CargaMascotaComponent
  },
  {
    path: 'listado',
    component: ListadoMascotasComponent
  },
  {
    path: 'detalle/:id',
    component: MascotaComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
