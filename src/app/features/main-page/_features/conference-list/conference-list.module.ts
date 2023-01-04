import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenceListComponent } from './conference-list.component';
import { ConferenceModule } from './_features/conference/conference.module';

@NgModule({
  declarations: [ConferenceListComponent],
  exports: [ConferenceListComponent],
  imports: [CommonModule,
  ConferenceModule],
})
export class ConferenceListModule {}
