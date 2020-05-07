export class Pelicula {
    id:number;
    nombre:string;
    tipo:string;
    fechaEstreno: Date;
    cantidaPublico:number;
    fotoPeli:string;

    constructor(id,nombre,tipo,fechaEstreno,cantidaPublico,fotoPeli){
        this.id=id;
        this.nombre=nombre;
        this.tipo=tipo;
        this.fechaEstreno=fechaEstreno;
        this.cantidaPublico=cantidaPublico;
        this.fotoPeli=fotoPeli;

    }
}
