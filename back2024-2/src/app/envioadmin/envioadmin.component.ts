import { Component, HostBinding, OnInit } from '@angular/core';
import { adminmodel } from '../modelos/adminmodel'
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-envioadmin',
  templateUrl: './envioadmin.component.html',
  styleUrls: ['./envioadmin.component.css']
})
export class EnvioadminComponent implements OnInit {
  @HostBinding('class') clases = 'row';

  
  
  modelo: adminmodel = {
      
    id: '0',
    nombre: '',
    apellido: '',
    email:'',
    cargo:'',
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
    this.ProductosService.SalvarAdmin(this.modelo)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/Admin']);
      },
      err => console.error(err)
    )
    

  }
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
