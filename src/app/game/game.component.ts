import { Component, OnInit } from '@angular/core';
import { GameService } from "../services/game.service";

@Component({
    selector : 'app-game',
    template : `
        <!--<p> guess a letter </p>-->
        <div>
            <app-display-picture></app-display-picture>
        </div>
        <div>
            <app-display-word [word]="revealedWord"></app-display-word>
        </div>
        <div>
            <strong>Used Strikes : </strong>{{numberOfFailedStrikes}} / {{maxStrikes}}
        </div>
        <hr/>
        <app-keyboard (selectLetter)="selectLetterByUser($event)"></app-keyboard>
    `,
    styles : []
})
export class GameComponent implements OnInit {

    maxStrikes : number;
    numberOfFailedStrikes : number;
    revealedWord : string;

    constructor(private  gameService : GameService) {
    }

    ngOnInit() {
        this.maxStrikes = this.gameService.getMaxStrikes();
        this.updateStrikesStatus();
    }

    updateStrikesStatus() {
        this.numberOfFailedStrikes = this.gameService.getNumberOfFailedStrikes();
        this.revealedWord          = this.gameService.getRevealedWord();
    }

    selectLetterByUser(letter : string) {
        this.gameService.selectLetter(letter);

        this.updateStrikesStatus();
    }

}
