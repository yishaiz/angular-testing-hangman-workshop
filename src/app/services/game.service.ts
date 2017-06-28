import { Injectable } from '@angular/core';

@Injectable()
export class GameService {

    constructor() {
    }

    private word : string = "guess";

    getWordToGuess() : string {
        return this.word;
    }

    getWordLetters() : string [] {
        return this.word.split('');
    }


}
