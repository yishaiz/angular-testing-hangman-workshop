import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { GameService } from "./services/game.service";
import { KeyboardComponent } from './keyboard/keyboard.component';
import { LetterComponent } from './letter/letter.component';
import { LoginComponent } from './login/login.component';
import { DisplayLetterComponent } from './display-letter/display-letter.component';
import { DisplayPictureComponent } from './display-picture/display-picture.component';

@NgModule({
    declarations : [
        AppComponent,
        GameComponent,
        KeyboardComponent,
        LetterComponent,
        LoginComponent,
        DisplayLetterComponent,
        DisplayPictureComponent
    ],
    imports : [
        BrowserModule
    ],
    providers : [ GameService ],
    bootstrap : [ AppComponent ]
})
export class AppModule {
}
