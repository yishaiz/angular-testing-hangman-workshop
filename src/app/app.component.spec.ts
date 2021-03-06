import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { GameComponent } from "./game/game.component";
import { GameService } from "./services/game.service";
import { KeyboardComponent } from "./keyboard/keyboard.component";
import { LetterComponent } from "./letter/letter.component";
import { DisplayPictureComponent } from "./display-picture/display-picture.component";
import { DisplayWordComponent } from "./display-word/display-word.component";
import { DisplayPictureHeadComponent } from "./display-picture-head/display-picture-head.component";

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations : [
                AppComponent,
                GameComponent,
                KeyboardComponent,
                LetterComponent,
                DisplayWordComponent,
                DisplayPictureComponent,
                DisplayPictureHeadComponent
            ],
            providers : [
                GameService
            ]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app     = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should have as title 'app'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app     = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Hangman - TDD in Angular');
    }));

    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to Hangman - TDD in Angular');
    }));
});
