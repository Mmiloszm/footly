import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShareSelectedTeamService } from './core/services/games/share-selected-team.service';
import { MainPageModule } from './features/main-page/main-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MainPageModule
  ],
  providers: [ShareSelectedTeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
