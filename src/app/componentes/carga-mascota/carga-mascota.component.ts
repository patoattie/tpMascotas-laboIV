import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TipoMascota } from '../../enums/tipo-mascota.enum';
import { Mascota } from 'src/app/clases/mascota';

@Component({
  selector: 'app-carga-mascota',
  templateUrl: './carga-mascota.component.html',
  styleUrls: ['./carga-mascota.component.css']
})
export class CargaMascotaComponent implements OnInit {
  tiposMascota: string[];
  @Output() agregarMascotaEvent = new EventEmitter<Mascota>();
  mascota: Mascota;

  constructor() {
    this.tiposMascota = Object.values(TipoMascota);
    this.mascota = new Mascota();
  }

  ngOnInit(): void {
  }

  agregarMascota(): void {
    this.agregarMascotaEvent.emit(this.mascota);
    this.mascota.nombre = '';
    this.mascota.imagen = '';
    this.mascota.tipo = undefined;
  }

}
