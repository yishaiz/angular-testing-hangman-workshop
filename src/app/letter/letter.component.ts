import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameService } from "../services/game.service";

@Component({
    selector : 'app-letter',
    template : `
        <button
                type="button"
                [ngClass]="getItemClass()"
                class="btn btn-lg"
                (click)="keyClick()">{{char}}
        </button>
    `,

    styles : []
})
export class LetterComponent implements OnInit {

    isRevealedLetter : boolean = false;
    isSelectedLetter : boolean = false;

    @Input() char : string;

    @Input()
    set  isGuessed(value : boolean) {
        if (value == true) {
            this.isRevealedLetter = true;
        }
    }

    @Output() keyPress : EventEmitter<string> = new EventEmitter<string>();

    constructor(private gameService : GameService   ) {
    }

    ngOnInit() {
        // this.char = "r";
        this.isRevealedLetter = this.isWhitespace();
    }

    keyClick() : void {

        if(this.gameService.isGameOver())
        {
            return;
        }

        this.keyPress.emit(this.char);
        this.isSelectedLetter = true;
    }


    isRevealed() : boolean {
        return this.isRevealedLetter;
    }

    isWhitespace() : boolean {
        return this.char === ' ';
    }

    isSelected() : boolean {
        return this.isSelectedLetter;
    }

    getItemClass() : any {
        return {
            'btn-default' : this.isSelectedLetter,
            'btn-primary' : !this.isSelectedLetter
        };
    }
}