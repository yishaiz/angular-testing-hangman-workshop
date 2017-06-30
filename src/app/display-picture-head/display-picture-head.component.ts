import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
    selector : 'app-display-picture-head',
    templateUrl : './display-picture-head.component.html',
    styles : []
})
export class DisplayPictureHeadComponent implements OnInit {

    @Input() failsCounter : number = 0;
    @Input() isWin : boolean       = false;

    @Input()
    set isGameOver(value : boolean) {
        if (value == true) {
            this.startGameOverAnimation();
        }
    }


    private classNumber : number = 0;

    //private cdr:ChangeDetectorRef

    constructor() {
    }

    ngOnInit() {
        this.classNumber = 1;
    }

    startGameOverAnimation() {
        console.log("startGameOverAnimation");
        // this.classNumber = 2;

        this.classNumber = 4;
        // this.changeDetector.mar


        /*setTimeout(function () {

            this.classNumber = 3;
            // this.changeDetector.markForCheck();
            // this.cdr.detectChanges();
            // this.ref.markForCheck();
        }, 900)


        setTimeout(function () {
            this.classNumber = 4;
            // this.changeDetector.markForCheck();
            // this.cdr.detectChanges();
            // this.ref.markForCheck();
        }, 1300)
*/
    }

    // [ngClass]="getItemClass()"
    getItemStyle() : any {
        return {
            'head-first' : this.failsCounter > 2 && this.classNumber == 1,
            'head-second' : this.classNumber == 2,
            'head-third' : this.classNumber == 3,
            'head-fourth' : this.classNumber == 4
        };
    }
}


