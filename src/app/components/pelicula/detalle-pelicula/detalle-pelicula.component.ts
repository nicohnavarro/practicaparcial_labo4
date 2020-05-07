import { Component, OnInit, Input } from '@angular/core';
import { Pelicula} from '../../../models/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {
  @Input() peliculaParaMostrar:Pelicula;

  constructor() { }

  ngOnInit(): void {
  }

}
