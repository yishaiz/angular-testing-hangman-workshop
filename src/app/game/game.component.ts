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
            <app-display-letter></app-display-letter>
        </div>

        <hr/>
        <app-keyboard></app-keyboard>
    `,
    styles : []
})
export class GameComponent implements OnInit {

    constructor(private  gameService : GameService) {
    }

    ngOnInit() {
    }

}
