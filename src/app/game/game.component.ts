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
<div>
    <strong>Used Strikes : </strong>{{numberOfFailedStrikes}} / {{maxStrikes}}
</div>
        <hr/>
        <app-keyboard></app-keyboard>
    `,
    styles : []
})
export class GameComponent implements OnInit {

      maxStrikes : number            ;
      numberOfFailedStrikes : number  ;

    constructor(private  gameService : GameService) {
    }

    ngOnInit() {
        this.maxStrikes=this.gameService.getMaxStrikes();
        this.updateStrikesStatus();
    }

    updateStrikesStatus(){
        this.numberOfFailedStrikes=this.gameService.getNumberOfFailedStrikes();
    }

}
