
import {Component,OnInit} from "@angular/core";

@Component({
    selector: 'default',
    templateUrl: 'default.component.html'
})
export class DefaultComponent implements OnInit{

    constructor(){

    }

    ngOnInit() {
        console.log('StateOnecalled');
    }
}
