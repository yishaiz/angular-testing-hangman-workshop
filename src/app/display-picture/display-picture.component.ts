import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector : 'app-display-picture',
    templateUrl : './display-picture.component.html',
    styles : [ `
        .container {
          /*transform: scale(0.5, 0.5);*/
        }
    ` ]
})
export class DisplayPictureComponent implements OnInit {


    @Input() failsCounter : number = 0;

    constructor() {
    }

    ngOnInit() {
    }

}
