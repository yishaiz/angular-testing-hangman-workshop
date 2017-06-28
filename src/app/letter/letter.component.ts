import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector : 'app-letter',
    template : `
        <button type="button" (click)="keyClick()">{{char}}</button>
        <!--ngClass="getItemStyle()"-->
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

    constructor() {
    }

    ngOnInit() {
        // this.char = "r";
        this.isRevealedLetter = this.isWhitespace();
    }

    keyClick() : void {
        this.keyPress.emit(this.char);
         
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


    /*getItemClass(): any{
     return {'aabb' : true};
     // return null;
     }
     */
}
