import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paises-listado',
  templateUrl: './paises-listado.component.html',
  styleUrls: ['./paises-listado.component.css']
})
export class PaisesListadoComponent implements OnInit {
  paisSeleccionado:any;
  estado:string='cargando';
  constructor() { }

  ngOnInit(): void {
  }
  tomarPaisParaDetalles(pais: any) {
    this.estado = 'cargando';
    setTimeout(() => {
      this.paisSeleccionado = pais;
      this.estado = 'cargado';
    }, 500);
  }
}
