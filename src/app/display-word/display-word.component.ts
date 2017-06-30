import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector : 'app-display-word',
    template : `
        <h2 class="word-letters">
            {{word}}
        </h2>
    `,
    styles : [`
        .word-letters{
            letter-spacing: 22px;
        }
    `]
})
export class DisplayWordComponent implements OnInit {

    @Input() word : string;

    constructor() {
    }

    ngOnInit() {
    }

}
