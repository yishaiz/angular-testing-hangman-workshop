import { TestBed, inject } from '@angular/core/testing';

import { GameService } from './game.service';

describe('GameService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers : [
                GameService
            ]
        });
    });

    it('should be created', inject([ GameService ], (gameService : GameService) => {
        expect(gameService).toBeTruthy();
    }));

    it('should have a guess word', inject([ GameService ], (gameService : GameService) => {
        expect(gameService.getWordToGuess()).toBe("Welcome to TDD");
    }));

    it('should have a guess word letters', inject([ GameService ], (gameService : GameService) => {
        const wordLetters : any[] =
                      [ 'W', 'E', 'L', 'C', 'O', 'M', 'E', ' ', 'T', 'O', ' ', 'T', 'D', 'D' ];
              // [ 'W', 'e', 'l', 'c', 'o', 'm', 'e', ' ', 't', 'o', ' ', 'T', 'D', 'D' ];

        // expect(gameService.getWordLetters()).toBe(wordLetters);
        expect(gameService.getWordLetters()).toEqual(wordLetters);
    }));

    it('should give a guess word - another word', inject([ GameService ], (gameService : GameService) => {
        gameService.setWordToGuess("another word");

        // expect(gameService.getWordToGuess()).toBe("Welcome to TDD");
        expect(gameService.getWordToGuess()).toBe("another word");
    }));


    it('should have the characters in keyboard', inject([ GameService ], (gameService : GameService) => {
        //no need this:
        // gameService.setWordToGuess("another word");

        expect(gameService.keyboardLetters).toBe('qwertyuiopasdfghjklzxcvbnm');
    }));

    // --------------------------------------------------

    it('should select a key in keyboard - is selected', inject([ GameService ], (gameService : GameService) => {
        //no need this:
        // gameService.setWordToGuess("another word");

        expect(gameService.isSelectedLetter("a")).toBe(false);
    }));

    it('should select a key in keyboard - select', inject([ GameService ], (gameService : GameService) => {
        //no need this:
        // gameService.setWordToGuess("another word");

        //given
        // ... a game... previous selected letters...

        //when
        gameService.selectLetter('f');

        //then
        expect(gameService.isSelectedLetter("a")).toBe(false);
        expect(gameService.isSelectedLetter("f")).toBe(true);
    }));

    it('should select a key in keyboard - select - another test', inject([ GameService ], (gameService : GameService) => {
        //no need this:
        // gameService.setWordToGuess("another word");

        // no dependency

        gameService.selectLetter('g');
        gameService.selectLetter('z');
        gameService.selectLetter('t');

        expect(gameService.isSelectedLetter("a")).toBe(false);
        expect(gameService.isSelectedLetter("f")).toBe(false);
        expect(gameService.isSelectedLetter("g")).toBe(true);
    }));


    // --------------------------------------------------
    //  getRevealedLetter


    it('should return the guess world in its current status', inject([ GameService ], (gameService : GameService) => {
        gameService.setWordToGuess('client side testing');

        expect(gameService.getRevealedLettersArray()).toEqual('______ ____ _______'.split(''));

        gameService.selectLetter('i');
        expect(gameService.getRevealedLettersArray()).toEqual('__i___ _i__ ____i__'.split(''));

        gameService.selectLetter('t');
        expect(gameService.getRevealedLettersArray()).toEqual('__i__t _i__ t__ti__'.split(''));
    }));


    // --------------------------------------------------
    //  check number of strikes


    it('should check number of strikes', inject([ GameService ], (gameService : GameService) => {
        gameService.setWordToGuess('client side testing');

        gameService.selectLetter('a');
        expect(gameService.getNumberOfFailedStrikes()).toBe(1);

        gameService.selectLetter('b');
        expect(gameService.getNumberOfFailedStrikes()).toBe(2);

        gameService.selectLetter('t');
        expect(gameService.getNumberOfFailedStrikes()).toBe(2);

        gameService.selectLetter('a');
        expect(gameService.getNumberOfFailedStrikes()).toBe(2);

        gameService.selectLetter('t');
        expect(gameService.getNumberOfFailedStrikes()).toBe(2);
    }));

    it('should check if word contains guessed letter', inject([ GameService ], (gameService : GameService) => {
        gameService.setWordToGuess('abcdefg');

        expect(gameService.doesWordContainGuessedLetter('A')).toBe(true);
        expect(gameService.doesWordContainGuessedLetter('R')).not.toBe(true);
    }));

    // --------------------------------------------------
    //  check end of game

    it('should check number of strikes - win', inject([ GameService ], (gameService : GameService) => {
        gameService.setWordToGuess('abc');

        gameService.selectLetter('a');
        gameService.selectLetter('b');
        expect(gameService.isGameOver()).toBe(false);

        gameService.selectLetter('c');
        expect(gameService.isGameOver()).toBe(true);
     }));

    it('should check number of strikes - lost', inject([ GameService ], (gameService : GameService) => {
        gameService.setWordToGuess('abc');

        gameService.selectLetter('q');
        gameService.selectLetter('w');
        gameService.selectLetter('e');
        gameService.selectLetter('r');
        gameService.selectLetter('t');
        gameService.selectLetter('y');
        gameService.selectLetter('u');
        expect(gameService.isGameOver()).toBe(false);

        gameService.selectLetter('i');
        expect(gameService.isGameOver()).toBe(true);
     }));


    it('should check number of strikes - use all strikes', inject([ GameService ], (gameService : GameService) => {
        gameService.setWordToGuess('abc');

        gameService.selectLetter('q');
        gameService.selectLetter('w');
        gameService.selectLetter('e');
        gameService.selectLetter('r');
        gameService.selectLetter('t');
        gameService.selectLetter('y');
        gameService.selectLetter('u');
        expect(gameService.isUsedAllStrikes()).toBe(false);

        gameService.selectLetter('i');
        expect(gameService.isUsedAllStrikes()).toBe(true);
    }));


    it('should check winning', inject([ GameService ], (gameService : GameService) => {
        gameService.setWordToGuess('abc');

        gameService.selectLetter('a');
        gameService.selectLetter('b');
        expect(gameService.isWin()).toBe(false);

        gameService.selectLetter('c');
        expect(gameService.isWin()).toBe(true);
    }));



});