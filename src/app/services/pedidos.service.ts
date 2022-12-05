import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Pedido} from "../modules/pedidos.module";

@Injectable({
  providedIn: 'root'
})

export class PedidosService {

  constructor(private http:HttpClient) { }

  public async lista(){
    let pedidos:Pedido[] | undefined = await firstValueFrom(this.http.get<Pedido[]>(`${environment.api}/pedidos`))
    return  pedidos;
  }
} 
