import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './vistas/home/home.component';
import { DetalleComponent } from './vistas/detalle/detalle.component';
import { ReproductorComponent } from './generales/reproductor/reproductor.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'detalle', component: DetalleComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
  { path: 'reproductor', component: ReproductorComponent },
  //{ path: 'reproductor', redirectTo: '/reproductor', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
