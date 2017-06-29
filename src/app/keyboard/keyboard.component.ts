import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GameService } from "../services/game.service";

@Component({
    selector : 'app-keyboard',
    template : `
        <!--
        <app-letter
                *ngFor="let key of keyboardLetters"
                [char]="key" 
                (keyPress)="selectKey($event)">
        </app-letter>
        -->
        <div>
        <span *ngFor="let key of keyboardLetters; let i=index">
            <app-letter
                    *ngIf="i<10"
                    [char]="key"
                    (keyPress)="selectKey($event)">
            </app-letter>
        </span>
        </div>

        <div>
        <span *ngFor="let key of keyboardLetters; let i=index">
            <app-letter
                    *ngIf="i>=10 && i<19"
                    [char]="key"
                    (keyPress)="selectKey($event)">
            </app-letter>
        </span>
        </div>

        <div>
        <span *ngFor="let key of keyboardLetters; let i=index">
            <app-letter
                    *ngIf="i>=19"
                    [char]="key"
                    (keyPress)="selectKey($event)">
            </app-letter>
        </span>
        </div>

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
