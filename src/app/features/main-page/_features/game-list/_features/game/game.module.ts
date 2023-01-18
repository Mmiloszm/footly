import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { StatisticsPreviewModule } from './_features/statistics-preview/statistics-preview.module';



@NgModule({
  declarations: [
    GameComponent
  ],
  exports: [
    GameComponent
  ],
  imports: [
    CommonModule,
    StatisticsPreviewModule
  ]
})
export class GameModule { }
