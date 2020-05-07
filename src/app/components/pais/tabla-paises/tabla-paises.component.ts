import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../../services/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  paises:[];

  constructor(private paisesServices:PaisesService) { }

  ngOnInit(): void {
    this.getPaises();
  }

  getPaises(){
    this.paisesServices.getPaises().subscribe(
      result => {
           
          if(result.code != 200){
            console.log('caca');
              console.log(result);
              this.paises = result;
              console.log(this.paises);
          }else{
          }

      },
      error => {
          console.log(<any>error);
      }
  );
  }
}
