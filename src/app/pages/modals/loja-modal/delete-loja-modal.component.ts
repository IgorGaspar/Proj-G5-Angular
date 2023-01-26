import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Loja } from 'src/app/modules/lojas.module';
import { LojasService } from 'src/app/services/lojas.service';

@Component({
  selector: 'app-delete-loja-modal',
  templateUrl: './delete-loja-modal.component.html',
  styleUrls: ['./delete-loja-modal.component.css']
})
export class DeleteLojaModalComponent implements OnInit {
  @Input() loja!:Loja;
  
  constructor(private http:HttpClient,
    public activeModal: NgbActiveModal,
    public lojaService: LojasService) { }

    ngOnInit(): void {
    }
    public reload() {
      window.location.reload();
    }

    public excluirLoja() {

      this.lojaService.excluir(this.loja.id)
      this.activeModal.close() //Fecha o Modal
      window.location.replace('/lojas') // Redireciona novamente para a página, fazendo o refresh
    }

}
