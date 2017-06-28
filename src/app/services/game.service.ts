import { Injectable } from '@angular/core';

@Injectable()
export class GameService {

  constructor() {
  }

  getWordToGuess(): string {
    return ""; // should be guess
  }

}
