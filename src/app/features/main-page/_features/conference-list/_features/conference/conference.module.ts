import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenceComponent } from './conference.component';



@NgModule({
  declarations: [
    ConferenceComponent
  ],
  exports: [
    ConferenceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ConferenceModule { }
