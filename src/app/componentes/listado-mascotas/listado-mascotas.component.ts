import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Mascota } from 'src/app/clases/mascota';
import { MascotasService } from 'src/app/servicios/mascotas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-mascotas',
  templateUrl: './listado-mascotas.component.html',
  styleUrls: ['./listado-mascotas.component.css']
})
export class ListadoMascotasComponent implements OnInit {
  listaMascotas: Mascota[];
  @Output() mostrarMascotaEvent = new EventEmitter<Mascota>();

  constructor(private mascotas: MascotasService, private ruta: Router) { }

  ngOnInit(): void {
    this.listaMascotas = this.mascotas.getListaMascotas();
  }

  mostrarDetalleMascota(mascota: Mascota): void {
    // this.mostrarMascotaEvent.emit(mascota);
    this.ruta.navigate(['/detalle/' + mascota.id]);
  }

}
