import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector : 'app-display-picture',
    templateUrl : './display-picture.component.html',
    styles : [ `
        
    ` ]
})
export class DisplayPictureComponent implements OnInit {


    @Input() failsCounter : number = 0;
    // @Input() isWin : boolean = false;
    // @Input() isGameOver : boolean = false;

    constructor() {
    }

    ngOnInit() {
    }

}
