import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { NavbarModule } from 'src/app/shared/features/navbar/navbar.module';
import { HeroModule } from './_features/hero/hero.module';
import { ConferenceListModule } from './_features/conference-list/conference-list.module';
import { GameListModule } from './_features/game-list/game-list.module';



@NgModule({
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
  imports: [
    CommonModule,
    NavbarModule,
    HeroModule,
    ConferenceListModule,
    GameListModule
  ]
})
export class MainPageModule { }
