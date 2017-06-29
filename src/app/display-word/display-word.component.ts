import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector : 'app-display-word',
    template : `
        <p>
            {{word}}
        </p>
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
