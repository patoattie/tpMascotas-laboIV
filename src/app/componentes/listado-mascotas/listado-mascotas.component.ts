import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/clases/mascota';
import { MascotasService } from 'src/app/servicios/mascotas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado-mascotas',
  templateUrl: './listado-mascotas.component.html',
  styleUrls: ['./listado-mascotas.component.css']
})
export class ListadoMascotasComponent implements OnInit {
  listaMascotas: Mascota[];
  mostrarDetalle: boolean;

  constructor(
    private mascotas: MascotasService,
    private ruta: Router,
    private rutaActiva: ActivatedRoute
  ) {
    this.listaMascotas = this.mascotas.getListaMascotas();
  }

  ngOnInit(): void {
    this.mostrarDetalle = false;
  }

  mostrarDetalleMascota(mascota: Mascota): void {
    this.mostrarDetalle = true;
    this.ruta.navigate(['detalle', mascota.id], {relativeTo: this.rutaActiva});
  }
}
