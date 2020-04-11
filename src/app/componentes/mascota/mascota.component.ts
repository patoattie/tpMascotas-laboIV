import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../clases/mascota';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MascotasService } from 'src/app/servicios/mascotas.service';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {
  mascota: Mascota;

  constructor(
    private ruta: ActivatedRoute,
    private router: Router,
    private mascotas: MascotasService
  ) {
    this.router.events.subscribe(evento => {
      if (evento instanceof NavigationEnd) {
        this.mascota = this.mascotas.getMascota(this.ruta.snapshot.paramMap.get('id'));
      }
    });
  }

  ngOnInit(): void {
    this.mascota = this.mascotas.getMascota(this.ruta.snapshot.paramMap.get('id'));
  }

  ocultarDetalleMascota(): void {
    this.router.navigate(['/listado']);
  }
}
