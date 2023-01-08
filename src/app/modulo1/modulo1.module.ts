import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Componente1Component } from './componente1/componente1.component';



@NgModule({
  declarations: [
    Componente1Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Componente1Component
  ]
})
export class Modulo1Module { }
