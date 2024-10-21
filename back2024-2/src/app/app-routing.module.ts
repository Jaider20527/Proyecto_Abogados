import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasosComponent } from './casos/casos.component';
import { EnviocasosComponent } from './enviocasos/enviocasos.component';
import { EnvioclientComponent } from './envioclient/envioclient.component';
import { ClientesComponent } from './clientes/clientes.component';
import { EnvioabogadoComponent } from './envioabogado/envioabogado.component';
import { AbogadosComponent } from './abogados/abogados.component';
import { EnvioadminComponent } from './envioadmin/envioadmin.component';
import { AdminComponent } from './admin/admin.component';
import { ModulesComponent } from './modules/modules.component';

//tenermos que enrutar los modulos que creemos desde aqui //
//para que al iniciar la aplicacion nos aparezca el modulo de inicio//
const routes: Routes = [
{
  path:'',
  redirectTo:'/Modulos',
  pathMatch:'full'
},


  {
    path:'Modulos',
    component: ModulesComponent
  },

  {
    path:'EnvioCasos',
    component: EnviocasosComponent
  },
// asi enganchamos el componente de lista al path que creamos arriba llamado inicio //
  {
  path:'Casos',
  component: CasosComponent
  },

  {
    path: 'EnvioClientes',
    component:  EnvioclientComponent 
  },

  {
    path: 'Clientes',
    component: ClientesComponent

  },

  {
    path: 'EnvioAbogados',
    component:  EnvioabogadoComponent
  },

  {
    path: 'Abogados',
    component: AbogadosComponent
  },

  {
    path: 'EnvioAdmin',
    component:  EnvioadminComponent
  },

  {
    path: 'Admin',
    component: AdminComponent
  }




];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
