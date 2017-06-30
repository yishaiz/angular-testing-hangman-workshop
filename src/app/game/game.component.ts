import { Component, OnInit } from '@angular/core';
import { GameService } from "../services/game.service";

@Component({
    selector : 'app-game',
    template : `
        <!--<p> guess a letter </p>-->
        <div>
            <app-display-word [word]="revealedWord"></app-display-word>
        </div>

        <div>
            <h3 class="use-strikes">
                <strong>Used Strikes : </strong>{{numberOfFailedStrikes}} / {{maxStrikes}}
            </h3>
        </div>

        <hr/>

        <app-keyboard (selectLetter)="selectLetterByUser($event)"></app-keyboard>

        <hr/>

        <h2 class="game-over" [hidden]="!isGameOver || isWin"> Game Over</h2>
        <h1 class="game-over-win" [hidden]="!isWin"> You won !!!</h1>

        <div class="hangman-picture">
            <!--<app-display-picture [failsCounter]="'8'"></app-display-picture>-->
            <app-display-picture
                    [failsCounter]="numberOfFailedStrikes"
                    [isGameOver]="isGameOver"
                    [isWin]="isWin"></app-display-picture>
        </div>
    `,
    styles : []
})
export class GameComponent implements OnInit {

    maxStrikes : number;
    numberOfFailedStrikes : number;
    revealedWord : string;
    isGameOver : boolean = false;
    isWin : boolean      = false;

    constructor(private  gameService : GameService) {
    }

    ngOnInit() {
        this.maxStrikes = this.gameService.getMaxStrikes();
        this.updateStrikesStatus();
    }

    updateStrikesStatus() {
        this.numberOfFailedStrikes = this.gameService.getNumberOfFailedStrikes();
        this.revealedWord          = this.gameService.getRevealedWord();
        this.isGameOver            = this.gameService.isGameOver();
        this.isWin                 = this.gameService.isWin();
    }

    selectLetterByUser(letter : string) {
        this.gameService.selectLetter(letter);

        this.updateStrikesStatus();
    }
}
