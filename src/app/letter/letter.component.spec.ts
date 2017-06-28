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
        fixture = TestBed.createComponent(LetterComponent);
        de      = fixture.debugElement.query(By.css('button'));
        el      = de.nativeElement;

        component = fixture.debugElement.componentInstance;

    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should display injected letter', () => {
        component.char = "g";

        expect(el.textContent).toBe('k');
    });
});
