import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  
  datos: any = [] ;  
  constructor(private ProductoServicio: ProductosService, private router: Router) { }
  ngOnInit(): void {
    this.lista()

  }

  lista(){
    
    this.ProductoServicio.ListaAdmin().subscribe(
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
