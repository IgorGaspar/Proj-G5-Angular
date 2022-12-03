import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(telefone: Number): String {
    let telefoneFormatado = telefone.toString();
    return telefoneFormatado.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  }

}

export class CpfPipe implements PipeTransform {

  transform(cpf: Number): String {
    let cpfFormatado = cpf.toString();
    return cpfFormatado.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

}