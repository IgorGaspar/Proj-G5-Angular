// import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Produto } from "../modules/produtos.module";

/* @Injectable({
  providedIn: 'root'
}) */
export class ProdutosService {

  constructor(private http:HttpClient) { }

  public async lista(){
    let produtos:Produto[] | undefined = await this.http.get<Produto[]>(`${environment.api}/produtos`).toPromise()
    return  produtos;
  }
}
