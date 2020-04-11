import { Injectable } from '@angular/core';
import { Mascota } from '../clases/mascota';
import { TipoMascota } from '../enums/tipo-mascota.enum';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {
  listaMascotas: Mascota[];

  constructor() {
    this.setListaMascotas();
  }

  agregarMascota(mascota: Mascota): void {
    const nuevaMascota: Mascota = new Mascota(mascota.nombre, mascota.imagen, mascota.tipo, this.listaMascotas.length + 1);
    this.listaMascotas.push(nuevaMascota);
    localStorage.setItem('mascotas', JSON.stringify(this.listaMascotas));
  }

  private setListaMascotas(): void {
    const storage: Mascota[] = JSON.parse(localStorage.getItem('mascotas'));

    if (storage != null) {
      this.listaMascotas = storage;
    }

    if (this.listaMascotas.length === 0) { // Si no hay datos inicializo con 3 mascotas de prueba.
      this.inicializarListaMascotas();
    } else {
      let corrigeId = false;

      this.listaMascotas.forEach((unaMascota, indice) => {
        if (unaMascota.id === undefined) {
          unaMascota.id = indice + 1;
          corrigeId = true;
        }
      });

      if (corrigeId) {
        localStorage.setItem('mascotas', JSON.stringify(this.listaMascotas));
      }
    }
  }

  getListaMascotas(): Mascota[] {
    return this.listaMascotas;
  }

  getMascota(id: string): Mascota {
    return this.listaMascotas.filter(unaMascota => unaMascota.id.toString() === id)[0];
  }

  private inicializarListaMascotas(): void {
    this.agregarMascota(new Mascota('Luna', '../assets/perro.jpg', TipoMascota.PERRO, 1));
    this.agregarMascota(new Mascota('Nachi', '../assets/gato.jpg', TipoMascota.GATO, 2));
    this.agregarMascota(new Mascota('Nemo', '../assets/pez.jpg', TipoMascota.PEZ, 3));
  }

}
