import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Pedido } from 'src/app/modules/pedidos.module';

@Component({
  selector: 'app-view-pedido-modal',
  templateUrl: './view-pedido-modal.component.html',
  styleUrls: ['./view-pedido-modal.component.css']
})
export class ViewPedidoModalComponent implements OnInit {
  @Input() pedido!:Pedido;

  constructor(public activeModal:NgbActiveModal) { }

  ngOnInit(): void {

  }

}
