import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})

export class TelefonePipe implements PipeTransform {

  transform(telefone: Number): String {
    let dataFormatado = telefone.toString();
    return dataFormatado.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  }

}