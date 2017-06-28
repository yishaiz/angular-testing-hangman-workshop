import { Component, OnInit } from '@angular/core';
import { GameService } from "../services/game.service";

@Component({
  selector: 'app-keyboard',
  template: `
    <p>
      keyboard Works!
    </p>
    <app-letter [char]="'b'"></app-letter>
  `,
  styles: []
})
export class KeyboardComponent implements OnInit {

  keyboardLetters : string [] = [];
  constructor(private gameSevice : GameService) {
  }

  ngOnInit() {
    this.keyboardLetters =
      this.gameSevice.getKeyboardLetters();
  }

}
