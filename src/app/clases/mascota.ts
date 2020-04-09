import { TipoMascota } from '../enums/tipo-mascota.enum';

export class Mascota {
    public nombre: string;
    public imagen: string;
    public tipo: TipoMascota;

    constructor(nombre?: string, imagen?: string, tipo?: TipoMascota) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.tipo = tipo;
    }
}
