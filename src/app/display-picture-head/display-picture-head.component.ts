import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-picture-head',
  templateUrl: './display-picture-head.component.html',
  styles: []
})
export class DisplayPictureHeadComponent implements OnInit {

  @Input() failsCounter : number = 0;
  @Input() isWin : boolean = false;
  @Input() isGameOver : boolean = false;

  constructor() { }

  ngOnInit() {
  }

}


