import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mascota } from '../../clases/mascota';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {
  @Input() mascota: Mascota;
  @Output() ocultarMascotaEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  ocultarDetalleMascota(): void {
    this.ocultarMascotaEvent.emit();
  }
}
