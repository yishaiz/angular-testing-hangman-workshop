import { Component, OnInit } from '@angular/core';
import { GameService } from "../services/game.service";

@Component({
    selector : 'app-game',
    template : `
        <!--<p> guess a letter </p>-->

        <button (click)="WinGame()" type="button" class="btn btn-primary">Win</button>
        <button (click)="LostGame()" type="button" class="btn btn-primary">Lost</button>
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
                    [failsCounter]="numberOfFailedStrikes">
            </app-display-picture>
        </div>
        <div class="hangman-picture-head">
            <!--<app-display-picture [failsCounter]="'8'"></app-display-picture>-->
            <app-display-picture-head
                    [failsCounter]="numberOfFailedStrikes"
                    [isGameOver]="isGameOver"
                    [isWin]="isWin"></app-display-picture-head>
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


    LostGame() : void {
        // alert("lost");
        console.log("lost");

        this.isGameOver = true;
    }

    WinGame() : void {
        // alert("win");
        // alert("win");
        console.log("win");
        this.isGameOver = true;
        this.isWin      = true;
    }


}
