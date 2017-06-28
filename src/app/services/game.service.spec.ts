import { TestBed, inject } from '@angular/core/testing';

import { GameService } from './game.service';

describe('GameService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers : [ GameService ]
        });
    });

    it('should be created', inject([ GameService ], (service : GameService) => {
        expect(service).toBeTruthy();
    }));

    it('should have a guess word', inject([ GameService ], (service : GameService) => {
        expect(service.getWordToGuess()).toBe("guess");
    }));

    it('should have a guess word letters', inject([ GameService ], (service : GameService) => {
        const wordLetters : any[] =
                  [ 'g', 'u', 'e', 's', 's' ];

        expect(service.getWordLetters()).toBe(wordLetters);
    }));


});
