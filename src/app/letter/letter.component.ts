import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector : 'app-letter',
  template : `
      <button type="button">{{char}}</button>
  `,
  styles : []
})
export class LetterComponent implements OnInit {


  @Input() char : string;

  constructor() {
  }

  ngOnInit() {
    this.char = "r";
  }

}
