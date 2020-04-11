import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Mascota } from '../../clases/mascota';
import { ActivatedRoute } from '@angular/router';
import { MascotasService } from 'src/app/servicios/mascotas.service';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {
  mascota: Mascota;
  @Output() ocultarMascotaEvent = new EventEmitter<void>();

  constructor(
    private ruta: ActivatedRoute,
    private mascotas: MascotasService
  ) { }

  ngOnInit(): void {
    // console.log(this.ruta.routerState);
    const idMascota = this.ruta.snapshot.paramMap.get('id');
    this.mascota = this.mascotas.getMascota(idMascota);
  }

  ocultarDetalleMascota(): void {
    this.ocultarMascotaEvent.emit();
  }
}
