import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CasosComponent } from './casos/casos.component';
import { EnviocasosComponent } from './enviocasos/enviocasos.component';
import { EnvioclientComponent } from './envioclient/envioclient.component';
import { ClientesComponent } from './clientes/clientes.component';
import { EnvioabogadoComponent } from './envioabogado/envioabogado.component';
import { AbogadosComponent } from './abogados/abogados.component';
import { AdminComponent } from './admin/admin.component';
import { EnvioadminComponent } from './envioadmin/envioadmin.component';
import { ModulesComponent } from './modules/modules.component';

@NgModule({
  declarations: [
    AppComponent,
    CasosComponent,
    EnviocasosComponent,
    EnvioclientComponent,
    ClientesComponent,
    EnvioabogadoComponent,
    AbogadosComponent,
    AdminComponent,
    EnvioadminComponent,
    ModulesComponent,
  ],
  imports: [
    BrowserModule , 
    AppRoutingModule ,
    HttpClientModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
