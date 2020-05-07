import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './components/pelicula/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './components/pelicula/pelicula-listado/pelicula-listado.component';
import { ActorAltaComponent } from './components/actor/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actor/actor-listado/actor-listado.component';
import { TablaPeliculaComponent } from './components/pelicula/tabla-pelicula/tabla-pelicula.component';
import { PaisesListadoComponent } from './components/pais/paises-listado/paises-listado.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';

const routes: Routes = [
  { path: '', component: BienvenidoComponent },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'pelicula/alta', component: PeliculaAltaComponent },
  { path: 'actor/alta', component: ActorAltaComponent },
  { path: 'actor/listado', component: ActorListadoComponent },
  { path: 'pelicula/listado', component: PeliculaListadoComponent },
  { path: 'paises/listado', component: PaisesListadoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
