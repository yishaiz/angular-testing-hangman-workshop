import { Injectable } from '@angular/core';

@Injectable()
export class GameService {

    constructor() {
    }

    private word : string              = "guess";
    public keyboardLetters : string    = "abcdefghijklmnopqrstuvwxyz";
            selectedLetters : string[] = [];

    getWordToGuess() : string {
        return this.word;
    }

    getWordLetters() : string [] {
        return this.word.split('');
    }

    setWordToGuess(word : string) : void {
        this.word = word;
    }

    isSelectedLetter(letter : string) : boolean {
        // console.log(this.selectedLetters.findIndex(l => l == letter));

        return this
                .selectedLetters
                .findIndex(l => l == letter) > -1;
    }

    selectLetter(letter : string) : void {
        // no need to check if already chosen

        this.selectedLetters.push(letter);
    }

    getRevealedLettersArray() : string [] {
        return [];
    }
}
