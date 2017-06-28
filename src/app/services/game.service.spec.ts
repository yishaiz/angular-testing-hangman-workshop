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
        expect(gameService.getWordToGuess()).toBe("guess");
    }));

    it('should have a guess word letters', inject([ GameService ], (gameService : GameService) => {
        const wordLetters : any[] =
                  [ 'g', 'u', 'e', 's', 's' ];

        // expect(gameService.getWordLetters()).toBe(wordLetters);
        expect(gameService.getWordLetters()).toEqual(wordLetters);
    }));


  it('should give a guess word - another word', inject([ GameService ], (gameService : GameService) => {
        gameService.setWordToGuess("another word");

        // expect(gameService.getWordToGuess()).toBe("guess");
        expect(gameService.getWordToGuess()).toBe("another word");
    }));


    it('should have the characters in keyboard', inject([ GameService ], (gameService : GameService) => {
        //no need this:
        // gameService.setWordToGuess("another word");

        expect(gameService.keyboardLetters).toBe('abcdefghijklmnopqrstuvwxyz');
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

});