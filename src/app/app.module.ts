import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './components/pelicula/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './components/pelicula/pelicula-listado/pelicula-listado.component';
import { ActorAltaComponent } from './components/actor/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actor/actor-listado/actor-listado.component';
import { TablaPeliculaComponent } from './components/pelicula/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './components/pelicula/detalle-pelicula/detalle-pelicula.component';
import { PaisesListadoComponent } from './components/pais/paises-listado/paises-listado.component';
import { TablaPaisesComponent } from './components/pais/tabla-paises/tabla-paises.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { PaisesService } from './services/paises.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    PeliculaListadoComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    PaisesListadoComponent,
    TablaPaisesComponent,
    BienvenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PaisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
