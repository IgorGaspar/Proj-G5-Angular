import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../modules/clientes.module';

/* @Injectable({
  providedIn: 'root'
}) */
export class ClientesService {

  constructor(private http:HttpClient) {}
  
    public async lista(){
      let clientes:Cliente[] | undefined = await this.http.get<Cliente[]>(`${environment.api}/clientes`).toPromise()
      return  clientes;
    }

}
