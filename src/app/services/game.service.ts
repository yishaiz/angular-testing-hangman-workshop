import { Injectable } from '@angular/core';
import { max } from "rxjs/operator/max";

@Injectable()
export class GameService {

    constructor() {
    }

    //should be from config or service.
    // Todo: test for this.
    private maxStrikes : number            = 8;
    private numberOfFailedStrikes : number = 0;

    private word : string              = "Welcome to TDD";
    public keyboardLetters : string    = "qwertyuiopasdfghjklzxcvbnm";
    private selectedLetters : string[] = [];

    getMaxStrikes() : number {
        return this.maxStrikes;
    }

    getNumberOfFailedStrikes() : number {
        return this.numberOfFailedStrikes;
    }

    isGameOver() : boolean {
        return null;
    }

    isWin() : boolean {
        return null;
    }

    getWordToGuess() : string {
        return this.word;
    }

    getWordLetters() : string [] {
        return this.word.split('');
    }

    isUsedAllStrikes() : boolean {
        return this.numberOfFailedStrikes >= this.maxStrikes;
    }

    doesWordContainGuessedLetter(letter : string) : boolean {
        return this
                .getWordLetters()
                .findIndex(l => l == letter) > -1;
    }


    //no test
    getKeyboardLetters() : string [] {
        return this.keyboardLetters.split('');
    }

    setWordToGuess(word : string) : void {
        this.word = word;
    }

    isSelectedLetter(letter : string) : boolean {
        return this
                .selectedLetters
                .findIndex(l => l == letter) > -1;
    }

    selectLetter(letter : string) : void {
        // no need to check if already chosen

        this.checkStrike(letter);

        this.selectedLetters.push(letter);
    }

    checkStrike(letter : string) : void {
        if (this.doesWordContainGuessedLetter(letter)) {
            return;
        }

        if (this.isSelectedLetter(letter)) {
            return;
        }

        this.numberOfFailedStrikes++;
    }

    getRevealedLettersArray() : string [] {
        const guessWordStatus = [];
        const wordCharArray   = this.word.split('');

        return wordCharArray.map((char) => {
            const shouldShowChar : boolean =
                      // char === ' ' || this.selectedLetters.findIndex(l => l == char) > -1;
                      char === ' ' || this.isSelectedLetter(char);

            return shouldShowChar ? char : '_';
        });

        /*
         wordCharArray.forEach((char) => {
         let letter = '_';

         const shouldShowChar : boolean =
         char === ' ' || this.selectedLetters.findIndex(l => l == char) > -1;

         if (shouldShowChar) {
         letter = char;
         }

         guessWordStatus.push(letter)

         });

         return guessWordStatus;

         */
    }
}
