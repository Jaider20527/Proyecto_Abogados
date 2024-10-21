import { Component, HostBinding, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { lawyermodel } from '../modelos/lawyermodel';


@Component({
  selector: 'app-envioabogado',
  templateUrl: './envioabogado.component.html',
  styleUrls: ['./envioabogado.component.css']
})
export class EnvioabogadoComponent implements OnInit {
  @HostBinding('class') clases = 'row';

  
  
  modelo: lawyermodel = {
      
    id: '0',
    nombre: '',
    apellido: '',
    email:'',
    cedula:'',
    tipoabogado:'',
    telefono: '',
    direccion: '',
    imagen: '',
  
  }
  
  edit: boolean = false;

  constructor(private ProductosService: ProductosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const params = this.activatedRoute.snapshot.params;


  }

  salvar(){
    delete this.modelo.id;
    this.ProductosService.SalvarAbogados(this.modelo)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/Abogados']);
      },
      err => console.error(err)
    )
    

  }
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

}
