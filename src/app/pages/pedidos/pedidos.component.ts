import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PedidosService } from 'src/app/services/pedidos.service';
import { PedidosProdutosService } from 'src/app/services/pedidosProdutos.service';
import { Pedido } from 'src/app/modules/pedidos.module';
import { ViewPedidoModalComponent } from '../modals/pedido-modal/view-pedido-modal.component';
import { CreatePedidoModalComponent } from 'src/app/pages/modals/pedido-modal/create-pedido-modal.component';
import { EditPedidoModalComponent } from 'src/app/pages/modals/pedido-modal/edit-pedido-modal.component';
import { DeletePedidoModalComponent } from 'src/app/pages/modals/pedido-modal/delete-pedido-modal.component';
<<<<<<< HEAD
import { PedidoProduto } from 'src/app/modules/pedidosProdutos.module';
=======
import { PedidoProduto, PedidosProdutosModule } from 'src/app/modules/pedidosProdutos.module';
import { LoginStatusService } from 'src/app/services/login-status.service';
>>>>>>> 4936a6c13bb0965a44a86fa540d662a6d8fe1e93
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private pedidosService: PedidosService,
    private loginStatusService:LoginStatusService,
    private modalService: NgbModal

  ) { }

  ngOnInit(): void {
    if(this.loginStatusService.redirectNãoLogado()) return
    this.listarPedidos()
    this.listarPedidosProdutos()
  }
  public pedidos: Pedido[] = [] // | undefined = []
  public pedidosProdutos: PedidoProduto[] = []//| undefined = []
  public produtosPorCliente: PedidoProduto[] = [] //  | undefined = []
  
  

  public async listarPedidos() {
    this.pedidos = await this.pedidosService.listaPedidos()
  }

  public async listarPedidosProdutos() {
    this.pedidosProdutos = await this.pedidosService.listaPedidosProdutos()
  }


  // public async listarProdutosDoPedido(this.produtos.id) {
  //   this.produtosPorCliente = await new PedidosService(this.http).buscarProduto()
  // }


  modalViewPedido(pedido: Pedido) {
    const modalRef = this.modalService.open(ViewPedidoModalComponent);
    modalRef.componentInstance.pedido = pedido;
    console.log(pedido)
  }

  modalCreatePedido(pedido: Pedido) {
    const modalRef = this.modalService.open(CreatePedidoModalComponent);
  }

  modalEditPedido(pedido: Pedido) {
    const modalRef = this.modalService.open(EditPedidoModalComponent);
    modalRef.componentInstance.pedido = pedido;
  }

  modalDeletePedido(pedido: Pedido) {
    const modalRef = this.modalService.open(DeletePedidoModalComponent);
    modalRef.componentInstance.pedido = pedido;
  }


  //Método para pegar o ID de um item do array
  //public static getById(idCliente:number) {
  //Busca o produto na lista pelo id informado
  // return this.listOfClients.filter(client => client.idCliente == idCliente)[0]
  //}

  //Método para pegar o produto do ID conseguido em getByID
  //public static getIndexByClient(client:Cliente){
  //Busca o index do produto localizado na variável seguinte
  //return this.listOfClients.indexOf(client)
  //}
  public idPedido:number = 0
  public pedidoFiltrado = []

  //Função para pegar o pedido e retornar o ID
  public getIDPedido(pedido:Pedido){
    return pedido.id
  }


  public buscarProdutoPorPedido(pedido:Pedido) {
    this.idPedido = this.getIDPedido(pedido);
    return this.pedidosProdutos.filter(pedidoProduto => pedidoProduto.pedido_id == this.idPedido)[0];
  }
  
  public imprimeConsole(pedido:Pedido){
    console.log(this.buscarProdutoPorPedido(pedido))
  }
  // public capturaPedidoProduto(pedidoProduto:PedidoProduto) {
  //   return this.pedidosProdutos.indexOf(pedidoProduto)    
  // }
  
  // public buscarProdutoPedido(pedido:Pedido){
  //   debugger
  //   this.idPedido = this.getIDPedido(pedido) //Coloca na variável ID pedido o ID encontrado na função getIDPedido
  //   return  this.buscarProdutoPorPedido(this.idPedido)
  //  // const result = this.buscarProdutoPorPedido(idPedido)
  // }
}


