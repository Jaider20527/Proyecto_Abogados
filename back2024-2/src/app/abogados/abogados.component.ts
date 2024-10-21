import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abogados',
  templateUrl: './abogados.component.html',
  styleUrls: ['./abogados.component.css']
})
export class AbogadosComponent implements OnInit {

 
  datos: any = [] ;  
  constructor(private ProductoServicio: ProductosService, private router: Router) { }
  ngOnInit(): void {
    this.lista()

  }

  lista(){
    
    this.ProductoServicio.ListaAbogados().subscribe(
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
