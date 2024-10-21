import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-envio',
  templateUrl: './casos.component.html',
  styleUrls: ['./casos.component.css']
})
export class CasosComponent implements OnInit {

datos: any = [] ;  
  constructor(private ProductoServicio: ProductosService, private router: Router) { }
  ngOnInit(): void {
    this.lista()

  }

  lista(){
    
    this.ProductoServicio.ListaProductos().subscribe(
    res =>{
      this.datos = res;
    },
      err => console.log("err")
    );



  }
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
