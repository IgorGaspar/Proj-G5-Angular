import { firstValueFrom } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Produto } from "../modules/produtos.module";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProdutosService {

  constructor(private http:HttpClient) { }

  public async lista(){
    let produtos:Produto[] | undefined = await firstValueFrom(this.http.get<Produto[]>(`${environment.api}/produtos`))
    return  produtos;
  }

  public async adicionar(produto:Produto): Promise<Produto | undefined> {
    let produtoAdd:Produto | undefined = await firstValueFrom(this.http.post<Produto>(`${environment.api}/produtos/`, produto))
    return produtoAdd;
  }

  public async atualizar(produto:Produto): Promise<Produto | undefined> {
    let produtoUpd:Produto | undefined = await firstValueFrom(this.http.put<Produto>(`${environment.api}/produtos/${produto.id}`, produto))
    return produtoUpd;
}

public async buscar(id:Number): Promise<Produto | undefined> {
    return await firstValueFrom(this.http.get<Produto | undefined>(`${environment.api}/produtos/${id}`))
}

public excluir(id:Number) {
    firstValueFrom(this.http.delete(`${environment.api}/produtos/${id}`))
}
}
