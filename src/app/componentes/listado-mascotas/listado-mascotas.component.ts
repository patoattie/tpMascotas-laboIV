import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Mascota } from 'src/app/clases/mascota';

@Component({
  selector: 'app-listado-mascotas',
  templateUrl: './listado-mascotas.component.html',
  styleUrls: ['./listado-mascotas.component.css']
})
export class ListadoMascotasComponent implements OnInit {
  @Input() listaMascotas: Mascota[];
  @Output() mostrarMascotaEvent = new EventEmitter<Mascota>();

  constructor() { }

  ngOnInit(): void {
  }

  mostrarDetalleMascota(mascota: Mascota): void {
    this.mostrarMascotaEvent.emit(mascota);
  }

}
