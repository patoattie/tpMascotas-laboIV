import { Component, OnInit } from '@angular/core';
import { Mascota } from './clases/mascota';
import { MascotasService } from './servicios/mascotas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tpMascotas';
  listaMascotas: Mascota[] = [];
  unaMascota: Mascota;
  mostrarDetalleMascota: boolean;

  constructor(private mascotas: MascotasService) { }

  ngOnInit(): void {
    this.listaMascotas = this.mascotas.getListaMascotas();
    this.mostrarDetalleMascota = false;
  }

  setMascota(mascota: Mascota): void {
    this.unaMascota = mascota;
    this.mostrarDetalleMascota = true;
  }

  ocultarDetalleMascota(): void {
    this.mostrarDetalleMascota = false;
  }

  agregarMascota(mascota: Mascota): void {
    this.mascotas.agregarMascota(this.listaMascotas, mascota);
  }

}
