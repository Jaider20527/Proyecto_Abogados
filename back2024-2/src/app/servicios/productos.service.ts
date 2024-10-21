import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Modelo } from '../model';
import { clientmodel } from '../modelos/clientmodel';
import { lawyermodel } from '../modelos/lawyermodel';
import { adminmodel } from '../modelos/adminmodel';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private API_URL = "http://localhost:8080/Casos" ;
  private API_URI1 = "http://localhost:8080/EnvioCasos";
  private API_URL_Client = "http://localhost:8008/Clientes";
  private API_URL_CrearClient = "http://localhost:8008/CrearClientes";
  private API_URL_Abogado = "http://localhost:8081/Abogados";
  private API_URL_CrearAbogado = "http://localhost:8081/CrearAbogados";
  private API_URL_Admin = "http://localhost:8082/Admin";
  private API_URL_CrearAdmin = "http://localhost:8082/CrearAdmin";

  constructor(private http: HttpClient) { }

  ListaProductos(){
    return this.http.get(`${this.API_URL}`);

  }


  SalvarProductos(modelo: Modelo) {
    return this.http.post(`${this.API_URI1}`, modelo);
  }

  ListaClientes(){
    return this.http.get(`${this.API_URL_Client}`);

  }

  SalvarClientes(modelo: clientmodel) {
    return this.http.post(`${this.API_URL_CrearClient}`, modelo);
  }

  ListaAbogados(){
    return this.http.get(`${this.API_URL_Abogado}`);

  }

  SalvarAbogados(modelo: lawyermodel) {
    return this.http.post(`${this.API_URL_CrearAbogado}`, modelo);
  }

  ListaAdmin(){
    return this.http.get(`${this.API_URL_Admin}`);

  }

  SalvarAdmin(modelo: adminmodel) {
    return this.http.post(`${this.API_URL_CrearAdmin}`, modelo);
  }




}
