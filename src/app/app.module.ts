import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { GameService } from "./services/game.service";

@NgModule({
  declarations : [
    AppComponent,
    GameComponent
  ],
  imports : [
    BrowserModule
  ],
  providers : [ GameService ],
  bootstrap : [ AppComponent ]
})
export class AppModule {
}
