import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LojasService } from 'src/app/services/lojas.service';

@Injectable({
  providedIn: "root",
})
@Component({
  selector: 'app-loja-observable',
  templateUrl: './loja-observable.component.html',
  styleUrls: ['./loja-observable.component.css']
})
export class LojaObservableComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.lojasCadastradas()
  }

  public qtdLojaCadastradas:  number = 0;

  public async lojasCadastradas(){
    let conta = await new LojasService(this.http).lista();
    this.qtdLojaCadastradas = conta ? conta.length : 0;
  }

}
