import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ReproductorComponent } from './reproductor/reproductor.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { GridCategoriasComponent } from './grid-categorias/grid-categorias.component';
import { SliderCategoriasComponent } from './slider-categorias/slider-categorias.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainMenuComponent,
    ReproductorComponent,
    CategoriasComponent,
    GridCategoriasComponent,
    SliderCategoriasComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterModule
  ],
  exports: [
    MainMenuComponent,
    ReproductorComponent,
    CategoriasComponent,
    GridCategoriasComponent,
    SliderCategoriasComponent
  ]
})
export class GeneralesModule { }
