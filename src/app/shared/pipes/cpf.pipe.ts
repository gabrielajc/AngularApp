import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf',
})
export class CpfPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    // 83060823030
    // 830.608.230-30

    let cpfStr =
      value.substring(0, 3) +
      '.' +
      value.substring(3, 6) +
      '.' +
      value.substring(6, 9) +
      '-' +
      value.substring(9, 11);

    console.log(value, cpfStr);

    return cpfStr;
  }
}
