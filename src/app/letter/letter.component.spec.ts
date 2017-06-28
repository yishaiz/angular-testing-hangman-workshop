import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterComponent } from './letter.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('LetterComponent', () => {
    let component : LetterComponent;
    let fixture : ComponentFixture<LetterComponent>;
    let de : DebugElement;
    let el : HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations : [
                LetterComponent
            ]
        })
               .compileComponents();
        fixture   = TestBed.createComponent(LetterComponent);
        component = fixture.debugElement.componentInstance;

        de = fixture.debugElement.query(By.css('button'));
        el = de.nativeElement;

        component.char = "x";

        fixture.detectChanges();
    }));

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should display injected letter', () => {
        component.char = "k";

        fixture.detectChanges();

        fixture.whenStable().then(() => {
                expect(el.textContent).toBe('k');
            }
        );
    });

    it('should emit selected letter event on key click', () => {
        const letter : string = 'k';

        component.char = letter;

        fixture.detectChanges();

        let selectedKey : string;

        component.keyPress.subscribe((value) => selectedKey = value);

        fixture.whenStable().then(() => {
            de.triggerEventHandler('click', null);

            expect(selectedKey).toBe(letter);
        });
    });


});


//check is revealed, is whitespace


describe('LetterComponent - revealed', () => {
    let component : LetterComponent;
    let fixture : ComponentFixture<LetterComponent>;
    let de : DebugElement;
    let el : HTMLElement;

    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                declarations : [
                    LetterComponent
                ]
            })
            .compileComponents();

        fixture   = TestBed.createComponent(LetterComponent);
        component = fixture.debugElement.componentInstance;

        de = fixture.debugElement.query(By.css('button'));
        el = de.nativeElement;

        // component.char = " ";
        //
        // fixture.detectChanges();
    }));

//check is revealed, is whitespace


    it('should be revealed as when letter is a whitespace', () => {
        component.char = " ";

        fixture.detectChanges();

        fixture.whenStable().then(() => {
                // fixture.detectChanges();

                expect(component.isWhitespace()).toBe(true);
                expect(component.isRevealed()).toBe(true);
            }
        );
    });

    it('should not be revealed as when letter is NOT a whitespace', () => {
        component.char = "a";

        fixture.detectChanges();

        fixture.whenStable().then(() => {
                // fixture.detectChanges();

                expect(component.isWhitespace()).toBe(false);
                expect(component.isRevealed()).toBe(false);
            }
        );
    });


    it('should be revealed as when letter is being guesses', () => {
        component.char = "a";

        fixture.detectChanges();

        fixture.whenStable().then(() => {
                // fixture.detectChanges();

                expect(component.isWhitespace()).toBe(false);
                expect(component.isRevealed()).toBe(false);

                component.isGuessed = true;

                fixture.detectChanges();

                expect(component.isWhitespace()).toBe(false);
                expect(component.isRevealed()).toBe(false);

            }
        );
    });

});
// ---------------------------

