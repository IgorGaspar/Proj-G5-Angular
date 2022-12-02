import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-observable',
  templateUrl: './cliente-observable.component.html',
  styleUrls: ['./cliente-observable.component.css']
})
export class ClienteObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public clientesCadastrados = 1
}
