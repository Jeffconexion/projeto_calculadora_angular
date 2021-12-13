import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from './services/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;

  constructor(private caculadoraService: CalculadoraService) {
    this.numero1 = "0";
    this.numero2 = "";
    this.operacao = "";
    this.resultado = 0;
  }

  ngOnInit() {
    this.limpar();
  }

  limpar() {
    this.numero1 = "0";
    this.numero2 = "";
    this.operacao = "";
    this.resultado = 0;
  }

  adicionarNumero(numero: string): void {
    if (this.operacaoIsEmpty())
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    else
      this.numero2 = this.concatenarNumero(this.numero2, numero);
  }

  concatenarNumero(numAtual: string, numConcat: string): string {
    //caso contenha apenas '0' ou null, reinicia o valor
    if (numAtual === '0' || numAtual === "") {
      numAtual = '';
    }
    //primeiro dígito é '.', concatena '0' antes do ponto
    if (numConcat === '.' && numAtual === '') {
      return '0.';
    }
    //caso '.' digitado e já contenha um '.', apenas retorna
    if (numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }
    return numAtual + numConcat;
  }

  definirOperacao(operacao: string): void {
    if (this.operacaoIsEmpty()) {
      this.operacao = operacao
      return;
    }
    if (this.numero2 !== "") {
      this.resultado = this.caculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao
      );
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = '0';
      this.resultado = 0;
    }
  }

  calcular(): void {
    if (this.numero2 === "")
      return;
    this.resultado = this.caculadoraService.calcular(parseFloat(this.numero1), parseFloat(this.numero2), this.operacao)
  }

  getDisplay(): string {
    if (this.resultado !== 0)
      return this.resultado.toString();

    if (this.numero2 !== "")
      return this.numero2;

    return this.numero1;
  }

  private operacaoIsEmpty(): boolean {
    return this.operacao === "";
  }
}
