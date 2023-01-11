import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloseDialogButtonComponent } from './close-dialog-button.component';



@NgModule({
  declarations: [
    CloseDialogButtonComponent
  ],
  exports: [
    CloseDialogButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CloseDialogButtonModule { }
