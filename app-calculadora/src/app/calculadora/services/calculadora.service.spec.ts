/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CalculadoraService } from './calculadora.service';

describe('Service: Calculadora', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
  });

  it('should ...', inject([CalculadoraService], (service: CalculadoraService) => {
    expect(service).toBeTruthy();
  }));

});

it('Deve garantir que a SOMA 1 + 4 = 5',
  inject([CalculadoraService], (service: CalculadoraService) => {
    let soma = service.calcular(1, 4, CalculadoraService.SOMA);
    expect(soma).toEqual(5);
  }));

it('Deve garantir que a SUBTRAÇÃO 4 - 1 = 3',
  inject([CalculadoraService], (service: CalculadoraService) => {
    let sub = service.calcular(4, 1, CalculadoraService.SUBTRACAO);
    expect(sub).toEqual(3);
  }));

it('Deve garantir que a MULTIPLICAÇÃO 9 * 4 = 36',
  inject([CalculadoraService], (service: CalculadoraService) => {
    let mul = service.calcular(9, 4, CalculadoraService.MULTIPLICACAO);
    expect(mul).toEqual(36);
  }));

it('Deve garantir que a DIVISÃO 4 / 2 = 2',
  inject([CalculadoraService], (service: CalculadoraService) => {
    let div = service.calcular(4, 2, CalculadoraService.DIVISAO);
    expect(div).toEqual(2);
  }));

it('Deve garantir o valor Defalt = 0',
  inject([CalculadoraService], (service: CalculadoraService) => {
    let defaultResult = service.calcular(1, 4, '$');
    expect(defaultResult).toEqual(0);
  }));
