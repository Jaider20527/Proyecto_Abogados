import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  datos: any = [] ;  
  constructor(private ProductoServicio: ProductosService, private router: Router) { }
  ngOnInit(): void {
    this.lista()

  }

  lista(){
    
    this.ProductoServicio.ListaClientes().subscribe(
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
