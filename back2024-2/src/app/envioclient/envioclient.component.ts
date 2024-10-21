import { Component, HostBinding, OnInit } from '@angular/core';
import { clientmodel } from '../modelos/clientmodel';
import { ProductosService } from '../servicios/productos.service';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-envioclient',
  templateUrl: './envioclient.component.html',
  styleUrls: ['./envioclient.component.css']
})
export class EnvioclientComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  
  
  modelo: clientmodel = {
      
    id: '0',
    nombre: '',
    apellido: '',
    email:'',
    cedula:'',
    telefono: '',
    direccion: '',
  
  }
  
  edit: boolean = false;

  constructor(private ProductosService: ProductosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const params = this.activatedRoute.snapshot.params;


  }

  salvar(){
    delete this.modelo.id;
    this.ProductosService.SalvarClientes(this.modelo)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/Clientes']);
      },
      err => console.error(err)
    )
    

  }
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

}
