import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list.component';
import { GameModule } from './_features/game/game.module';



@NgModule({
  declarations: [
    GameListComponent
  ],
  exports: [
    GameListComponent
  ],
  imports: [
    CommonModule,
    GameModule
  ]
})
export class GameListModule { }
