import { Component, OnInit, } from '@angular/core';
import { TipoMascota } from '../../enums/tipo-mascota.enum';
import { Mascota } from 'src/app/clases/mascota';
import { MascotasService } from 'src/app/servicios/mascotas.service';

@Component({
  selector: 'app-carga-mascota',
  templateUrl: './carga-mascota.component.html',
  styleUrls: ['./carga-mascota.component.css']
})
export class CargaMascotaComponent implements OnInit {
  tiposMascota: string[];
  mascota: Mascota;
  ultimaMascota: Mascota;

  constructor(private mascotas: MascotasService) {
    this.tiposMascota = Object.values(TipoMascota);
    this.mascota = new Mascota();
    this.ultimaMascota = new Mascota();
  }

  ngOnInit(): void {
  }

  agregarMascota(): void {
    this.mascotas.agregarMascota(this.mascota);

    this.ultimaMascota = {...this.mascota}; // Clono el objeto mascota en el objeto ultimaMascota.

    this.mascota.nombre = '';
    this.mascota.imagen = '';
    this.mascota.tipo = undefined;
  }

}
