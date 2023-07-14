import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './vistas/home/home.component';
import { DetalleComponent } from './vistas/detalle/detalle.component';
import { ReproductorComponent } from './generales/reproductor/reproductor.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'detalle', component: DetalleComponent },
  { path: 'reproductor', component: ReproductorComponent },
  { path: 'reproductor', redirectTo: '/reproductor', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },//esto siempre abajo, lo lee arriva a abajo


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
