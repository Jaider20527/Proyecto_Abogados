import { Component, HostBinding, OnInit } from '@angular/core';
import { Modelo } from '../model';
import { ProductosService } from '../servicios/productos.service';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-enviocasos',
  templateUrl: './enviocasos.component.html',
  styleUrls: ['./enviocasos.component.css']
})
export class EnviocasosComponent implements OnInit {
  @HostBinding('class') clases = 'row';

  
  
  modelo: Modelo = {
      
    id: '0',
    cliente: '',
    tipocaso: '',
    fechainicio:'',
    fechacierre:'',
    prioridad: '',
    estado: '',
    descripcioncaso: '',
    abogadoasignado: '',
  }
  
  edit: boolean = false;

  constructor(private ProductosService: ProductosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const params = this.activatedRoute.snapshot.params;


  }

  salvar(){
    delete this.modelo.id;
    this.ProductosService.SalvarProductos(this.modelo)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/Casos']);
      },
      err => console.error(err)
    )
    

  }
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

}
