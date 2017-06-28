import { Injectable } from '@angular/core';

@Injectable()
export class GameService {

    constructor() {
    }

    private word : string              = "guess";
    public keyboardLetters : string    = "abcdefghijklmnopqrstuvwxyz";
    private selectedLetters : string[] = [];

    getWordToGuess() : string {
        return this.word;
    }

    getWordLetters() : string [] {
        return this.word.split('');
    }

    //no test
    getKeyboardLetters() : string [] {
        return this.keyboardLetters.split('');
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
