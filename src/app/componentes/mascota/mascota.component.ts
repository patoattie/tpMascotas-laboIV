import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mascota } from '../../clases/mascota';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {
  @Input() mascota: Mascota;
  @Output() ocultarMascotaEvent = new EventEmitter<void>();

  constructor(private ruta: Router) { }

  ngOnInit(): void {
    console.log(this.ruta);
  }

  ocultarDetalleMascota(): void {
    this.ocultarMascotaEvent.emit();
  }
}
