import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculadoraService {
  constructor() {}

  private readonly SOMA: string = '+';
  private readonly SUBTRACAO: string = '-';
  private readonly DIVISAO: string = '/';
  private readonly MULTIPLICACAO: string = '*';

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number;

    switch (operacao) {
      case this.SOMA:
        resultado = num1 + num2;
        break;
      case this.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case this.DIVISAO:
        resultado = num1 / num2;
        break;
      case this.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
        break;
    }
    return resultado;
  }
}
