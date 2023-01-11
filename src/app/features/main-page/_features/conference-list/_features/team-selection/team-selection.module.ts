import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamSelectionComponent } from './team-selection.component';
import { TeamModule } from './_features/team/team.module';
import { CloseDialogButtonModule } from './_features/close-dialog-button/close-dialog-button.module';



@NgModule({
  declarations: [
    TeamSelectionComponent
  ],
  exports: [
    TeamSelectionComponent
  ],
  imports: [
    CommonModule,
    TeamModule,
    CloseDialogButtonModule
  ]
})
export class TeamSelectionModule { }
