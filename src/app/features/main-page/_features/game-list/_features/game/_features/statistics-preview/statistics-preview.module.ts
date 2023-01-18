import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsPreviewComponent } from './statistics-preview.component';
import { SetRowsDirective } from './directives/set-rows.directive';



@NgModule({
  declarations: [
    StatisticsPreviewComponent,
    SetRowsDirective
  ],
  exports: [
    StatisticsPreviewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StatisticsPreviewModule { }
