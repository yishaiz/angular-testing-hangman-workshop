import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardComponent } from './keyboard.component';
import { GameService } from "../services/game.service";
import { LetterComponent } from "../letter/letter.component";
import { FormsModule } from "@angular/forms";

describe('KeyboardComponent', () => {
  let component : KeyboardComponent;
  let fixture : ComponentFixture<KeyboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations : [
        KeyboardComponent,
        LetterComponent
      ],
      providers : [
        GameService
      ],
      imports : [
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it(`should have letters'`, () => {
    const expected : string[] = "abcdefghijklmnopqrstuvwxyz".split('');
    const fixture = TestBed.createComponent(KeyboardComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app.keyboardLetters).toEqual(expected);
  });

});
