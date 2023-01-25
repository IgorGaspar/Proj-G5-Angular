import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class LojasModule {}

export interface Loja {
  id: number;
  nome: string;
  observacao: string;
  cep: string;
  logradouro: string;
  numero: number;
  bairro: string;
  cidade: string;
  estado: string;
  complemento: string;
  latitude: number;
  longitude: number;
}
