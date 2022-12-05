import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-cliente-observable',
  templateUrl: './cliente-observable.component.html',
  styleUrls: ['./cliente-observable.component.css']
})

export class ClienteObservableComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private router: Router,
    private ClientesService:ClientesService
    ) {      }

  ngOnInit(): void {
    this.clientesCadastrados()
  }

  public qtdClientesCadastrados:number = 0

  public async clientesCadastrados(){
    let conta = await new ClientesService(this.http).lista()
    this.qtdClientesCadastrados = conta ? conta.length : 0;
  }
}

