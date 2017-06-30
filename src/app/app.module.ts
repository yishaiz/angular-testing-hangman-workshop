import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { GameService } from "./services/game.service";
import { KeyboardComponent } from './keyboard/keyboard.component';
import { LetterComponent } from './letter/letter.component';
import { LoginComponent } from './login/login.component';
import { DisplayPictureComponent } from './display-picture/display-picture.component';
import { DisplayWordComponent } from './display-word/display-word.component';
import { DisplayPictureHeadComponent } from './display-picture-head/display-picture-head.component';

@NgModule({
    declarations : [
        AppComponent,
        GameComponent,
        KeyboardComponent,
        LetterComponent,
        LoginComponent,
        DisplayWordComponent,
        DisplayPictureComponent,
        DisplayPictureHeadComponent
    ],
    imports : [
        BrowserModule
    ],
    providers : [ GameService ],
    bootstrap : [ AppComponent ]
})
export class AppModule {
}
