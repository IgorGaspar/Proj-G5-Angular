import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data'
})

export class DataPipe implements PipeTransform {

  transform(data: Number): String {
    let dataFormatado = data.toString();
    return dataFormatado.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/S3");
  }

}