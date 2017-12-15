
import {Component,OnInit} from "@angular/core";

@Component({
    selector: 'statetwo',
    templateUrl: 'statetwo.component.html'
})
export class StatetwoComponent implements OnInit{

    constructor(){

    }

    ngOnInit() {
        console.log('StateTwocalled');
    }
}
