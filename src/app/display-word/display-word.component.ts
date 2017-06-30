import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector : 'app-display-word',
    template : `
        <h2>
            {{word}}
        </h2>
    `,
    styles : []
})
export class DisplayWordComponent implements OnInit {

    @Input() word : string;

    constructor() {
    }

    ngOnInit() {
    }

}
