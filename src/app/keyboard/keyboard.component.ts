import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GameService } from "../services/game.service";

@Component({
    selector : 'app-keyboard',
    template : `
        <app-letter
                *ngFor="let key of keyboardLetters"
                [char]="key" 
                (keyPress)="selectKey($event)">
        </app-letter>
    `,
    styles : []
})
export class KeyboardComponent implements OnInit {

    keyboardLetters : string [] = [];

    @Output() selectLetter : EventEmitter<string> = new EventEmitter<string>();


    constructor(private gameSevice : GameService) {
    }

    ngOnInit() {
        this.keyboardLetters =
            this.gameSevice.getKeyboardLetters();
    }

    selectKey(key : string) : void {
        this.selectLetter.emit(key);
    }

}
