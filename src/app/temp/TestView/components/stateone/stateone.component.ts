
import {Component,OnInit} from "@angular/core";

@Component({
    selector: 'stateone',
    templateUrl: 'stateone.component.html'
})
export class StateoneComponent implements OnInit{

    constructor(){

    }

    ngOnInit() {
        console.log('StateOnecalled');
    }
}
