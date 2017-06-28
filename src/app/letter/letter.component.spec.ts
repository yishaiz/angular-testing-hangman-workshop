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
    }));

    beforeEach(() => {
        fixture   = TestBed.createComponent(LetterComponent);
        component = fixture.debugElement.componentInstance;

        de = fixture.debugElement.query(By.css('button'));
        el = de.nativeElement;

        component.char = "x";

        fixture.detectChanges();
    });

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

            expect(selectedKey).toBe('d');
        });
    });
});
