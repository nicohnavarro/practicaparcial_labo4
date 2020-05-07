import { Component, OnInit } from '@angular/core';
import { Pelicula} from '../../../models/pelicula';
@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {
  peliculaSeleccionada: Pelicula;
  estado:string='cargando';
  constructor() { }

  ngOnInit(): void {
  }

  tomarPeliculaParaDetalles(pelicula: Pelicula) {
    this.estado = 'cargando';
    setTimeout(() => {
      this.peliculaSeleccionada = pelicula;
      this.estado = 'cargado';
    }, 500);
  }
}
