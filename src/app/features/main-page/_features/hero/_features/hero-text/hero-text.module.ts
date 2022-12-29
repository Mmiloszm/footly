import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroTextComponent } from './hero-text.component';



@NgModule({
  declarations: [
    HeroTextComponent
  ],
  exports: [HeroTextComponent],
  imports: [
    CommonModule
  ]
})
export class HeroTextModule { }
