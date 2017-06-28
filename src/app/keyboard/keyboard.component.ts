import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  template: `
    <p>
      keyboard Works!
    </p>
  `,
  styles: []
})
export class KeyboardComponent implements OnInit {

  keyboardLetters : string [] = [];
  constructor() { }

  ngOnInit() {
  }

}
