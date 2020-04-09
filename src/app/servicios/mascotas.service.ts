import { Injectable } from '@angular/core';
import { Mascota } from '../clases/mascota';
import { TipoMascota } from '../enums/tipo-mascota.enum';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  constructor() { }

  agregarMascota(listaMascotas: Mascota[], mascota: Mascota): void {
    const nuevaMascota: Mascota = new Mascota(mascota.nombre, mascota.imagen, mascota.tipo);
    listaMascotas.push(nuevaMascota);
    localStorage.setItem('mascotas', JSON.stringify(listaMascotas));
  }

  getListaMascotas(): Mascota[] {
    let listaMascotas: Mascota[] = [];
    const storage: Mascota[] = JSON.parse(localStorage.getItem('mascotas'));

    if (storage != null) {
      listaMascotas = storage;
    }

    if (listaMascotas.length === 0) { // Si no hay datos inicializo con 3 mascotas de prueba.
      this.inicializarListaMascotas(listaMascotas);
    }

    return listaMascotas;
  }


  private inicializarListaMascotas(listaMascotas: Mascota[]): void {
    this.agregarMascota(listaMascotas, new Mascota('Luna', '../assets/perro.jpg', TipoMascota.PERRO));
    this.agregarMascota(listaMascotas, new Mascota('Nachi', '../assets/gato.jpg', TipoMascota.GATO));
    this.agregarMascota(listaMascotas, new Mascota('Nemo', '../assets/pez.jpg', TipoMascota.PEZ));
  }

}
