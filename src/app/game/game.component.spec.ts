import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import { GameService } from "../services/game.service";
import { LetterComponent } from "../letter/letter.component";
import { KeyboardComponent } from "../keyboard/keyboard.component";
import { DisplayPictureComponent } from "../display-picture/display-picture.component";
import { DisplayWordComponent } from "../display-word/display-word.component";
import { DisplayPictureHeadComponent } from "../display-picture-head/display-picture-head.component";

describe('GameComponent', () => {
    let component : GameComponent;
    let fixture : ComponentFixture<GameComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations : [
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
        })
               .compileComponents();
    }));

    // todo: should test a stub instead of service !

    beforeEach(() => {
        fixture   = TestBed.createComponent(GameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
