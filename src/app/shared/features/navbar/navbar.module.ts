import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavButtonModule } from './_features/nav-button/nav-button.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports: [NavbarComponent],
  imports: [
    CommonModule,
    NavButtonModule
  ]
})
export class NavbarModule { }
