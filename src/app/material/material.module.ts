import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu'; 
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [    MatMenuModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule
  ],
  exports:[    MatMenuModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule
  ]
})
export class MaterialModule { }
