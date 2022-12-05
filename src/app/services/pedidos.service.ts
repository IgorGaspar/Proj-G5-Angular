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
<<<<<<< HEAD
} 
=======
  public excluirPedido(id:Number) {
    firstValueFrom(this.http.delete(`${environment.api}/pedidos/${id}`))
}
}
>>>>>>> 1b5d570b485f09c612e801455bb5317c86bd52ba
