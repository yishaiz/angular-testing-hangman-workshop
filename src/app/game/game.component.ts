import { Component, OnInit } from '@angular/core';
import { GameService } from "../services/game.service";

@Component({
  selector : 'app-game',
  template : `
    <p> guess a letter </p>
  `,
  styles : []
})
export class GameComponent implements OnInit {

  constructor(private  gameService : GameService) {
  }

  ngOnInit() {
  }

}
