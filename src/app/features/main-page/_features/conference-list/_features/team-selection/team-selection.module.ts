import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamSelectionComponent } from './team-selection.component';
import { TeamModule } from './_features/team/team.module';



@NgModule({
  declarations: [
    TeamSelectionComponent
  ],
  exports: [
    TeamSelectionComponent
  ],
  imports: [
    CommonModule,
    TeamModule
  ]
})
export class TeamSelectionModule { }
