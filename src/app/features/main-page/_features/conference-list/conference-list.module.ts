import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenceListComponent } from './conference-list.component';
import { ConferenceModule } from './_features/conference/conference.module';
import { TeamSelectionModule } from './_features/team-selection/team-selection.module';

@NgModule({
  declarations: [ConferenceListComponent],
  exports: [ConferenceListComponent],
  imports: [CommonModule,
  ConferenceModule,
TeamSelectionModule],
})
export class ConferenceListModule {}
