
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
 canciones! : any[];

 constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.cargarCanciones();
  }

  cargarCanciones(){
    this.http.get<any>('../../../assets/canciones.json').subscribe(
      data=> {
        this.canciones = data.canciones
      }
    )
  }
  
  
}
