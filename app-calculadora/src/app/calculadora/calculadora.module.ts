import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraService } from './services/calculadora.service';


@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    CalculadoraComponent
  ],
  providers:[
    CalculadoraService
  ],
  declarations: [CalculadoraComponent]
})
export class CalculadoraModule { }
