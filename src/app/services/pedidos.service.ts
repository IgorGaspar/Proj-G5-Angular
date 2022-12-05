import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Pedido} from "../modules/pedidos.module";


export class PedidosService {
  
  constructor(private http:HttpClient) { }

  public async lista(){
    let pedidos:Pedido[] | undefined = await firstValueFrom(this.http.get<Pedido[]>(`${environment.api}/pedidos`))
    return  pedidos;
  }
  public excluirPedido(id:Number) {
    firstValueFrom(this.http.delete(`${environment.api}/pedidos/${id}`))
}
}
