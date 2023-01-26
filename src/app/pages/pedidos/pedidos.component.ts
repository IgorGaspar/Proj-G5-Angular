import { ClientesService } from './../../services/clientes.service';
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
import { PedidoProduto, PedidosProdutosModule } from 'src/app/modules/pedidosProdutos.module';
import { LoginStatusService } from 'src/app/services/login-status.service';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private pedidosService: PedidosService,
    private pedidoProdutoService: PedidosProdutosService,
    private loginStatusService:LoginStatusService,
    private clienteService: ClientesService,
    private modalService: NgbModal

  ) { }

  ngOnInit(): void {
    if(this.loginStatusService.redirectNãoLogado()) return
    this.listarPedidos(this.paginaAtual)
    this.listarPedidosProdutos()
    this.listarInformacoesPedido()
  }
  public pedidos: Pedido[] = [] // | undefined = []
  public pedidosProdutos: PedidoProduto[] = []//| undefined = []
  public produtosPorCliente: PedidoProduto[] = [] //  | undefined = []

  private paginaAtual: number= 1;
  private numeroPaginas: number = 1
  

  public async listarPedidos(pagina: number) {
    this.pedidos = await this.pedidosService.listaPedidos(pagina)
    this.pedidos.map(async pedido=>{
      let cliente = await this.clienteService.buscar(pedido.clienteId);
      if(cliente != null) pedido.cliente_nome = cliente.nome;
      let pedidoProdutos: PedidoProduto[] = await this.pedidoProdutoService.listaPedidosProdutos(pedido.id);
      pedido.qtd_item = pedidoProdutos.length
    })

  }
  public async listarInformacoesPedido(){
    let pagina = await this.pedidosService.InformacoesPedidos();
    this.numeroPaginas = pagina.numeroPaginas;
  }
  public async listarPedidosProdutos() {
    //this.pedidosProdutos = await this.pedidoProdutoService.listaPedidosProdutos(this.pedidos[0].id)
  }

  modalViewPedido(pedido: Pedido) {
    const modalRef = this.modalService.open(ViewPedidoModalComponent);
    modalRef.componentInstance.pedido = pedido;
  }

  modalCreatePedido() {
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
    return this.pedidosProdutos.filter(pedidoProduto => pedidoProduto.pedidoId == this.idPedido)[0];
  }
  

  proximaPagina(){
    if(this.paginaAtual<this.numeroPaginas) this.listarPedidos((this.paginaAtual = this.paginaAtual + 1))
  }

  paginaAnterior(){
    if(this.paginaAtual>1) this.listarPedidos((this.paginaAtual = this.paginaAtual - 1))
  }
}


