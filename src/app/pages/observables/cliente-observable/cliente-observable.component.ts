import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { ClientesComponent } from '../../clientes/clientes.component';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-cliente-observable',
  templateUrl: './cliente-observable.component.html',
  styleUrls: ['./cliente-observable.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class ClienteObservableComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private ClientesComponent:ClientesComponent
    ) {
      this.contaCadastrados()
     }

  ngOnInit(): void {
  }

  public clientesCadastrados = 0

  public async contaCadastrados(){
      let lista = await new ClientesService(this.http).lista();
      this.clientesCadastrados = lista ? lista.length : 0;
      console.log()
  }
}

