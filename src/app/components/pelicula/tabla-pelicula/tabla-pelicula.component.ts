import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula} from '../../../models/pelicula';
import {IPelicula} from '../../../interfaces/IPelicula';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

const ELEMENT_DATA:IPelicula[] = [
  {id:1,nombre:'Spider-Man',tipo:'Otros',fechaEstreno: new Date('2020-12-12'),cantidaPublico:400,fotoPeli:'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/b/b0/Spider-Man_FFH_Profile.jpg/revision/latest?cb=20190917181733'}
  ,{id:2,nombre:'Spider-Man',tipo:'Otros',fechaEstreno: new Date('2020-12-12'),cantidaPublico:400,fotoPeli:'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/b/b0/Spider-Man_FFH_Profile.jpg/revision/latest?cb=20190917181733'}
  ,{id:3,nombre:'Spider-Man',tipo:'Otros',fechaEstreno: new Date('2020-12-12'),cantidaPublico:400,fotoPeli:'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/b/b0/Spider-Man_FFH_Profile.jpg/revision/latest?cb=20190917181733'}
  ,{id:4,nombre:'Spider-Man',tipo:'Otros',fechaEstreno: new Date('2020-12-12'),cantidaPublico:400,fotoPeli:'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/b/b0/Spider-Man_FFH_Profile.jpg/revision/latest?cb=20190917181733'}

]
@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'tipo', 'fechaEstreno','cantidaPublico','foto'];
  dataSource = ELEMENT_DATA;
  peliculas: Pelicula[]= [];
  @Output() peliculaSeleccionada: EventEmitter<any> = new EventEmitter<any>();

  pelicula1:Pelicula = new Pelicula(1,'Spider-Man','Otros','2020-12-12',400,'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/b/b0/Spider-Man_FFH_Profile.jpg/revision/latest?cb=20190917181733');
  pelicula2:Pelicula = new Pelicula(2,'Batman','Otros','2020-12-12',400,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFmmQJK71bckg-XWCW2urI7SlRmh-XC5ioSXsxdh_utYgncvKt&usqp=CAU');
  pelicula3:Pelicula = new Pelicula(3,'Joker','Otros','2020-12-12',400,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFmmQJK71bckg-XWCW2urI7SlRmh-XC5ioSXsxdh_utYgncvKt&usqp=CAU');
  pelicula4:Pelicula = new Pelicula(4,'Purga','Terror','2020-12-12',400,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFmmQJK71bckg-XWCW2urI7SlRmh-XC5ioSXsxdh_utYgncvKt&usqp=CAU');
  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('pelicula1',JSON.stringify(this.pelicula1));
    localStorage.setItem('pelicula2',JSON.stringify(this.pelicula2));
    localStorage.setItem('pelicula3',JSON.stringify(this.pelicula3));
    localStorage.setItem('pelicula4',JSON.stringify(this.pelicula4));
    this.peliculas.push(this.pelicula1);
    this.peliculas.push(this.pelicula2);
    this.peliculas.push(this.pelicula3);
    this.peliculas.push(this.pelicula4);


  }

  mostrarDetalles(pelicula:IPelicula){
    this.peliculaSeleccionada.emit(pelicula);
    console.log(pelicula)
  }
}
