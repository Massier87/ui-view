
import {Component,OnInit} from "@angular/core";
import {StateService} from '@uirouter/core';

@Component({
    selector: 'topbuttons',
    templateUrl: 'topbuttons.component.html'
})
export class TopbuttonsComponent implements OnInit{

    constructor( private stateService: StateService){}

    ngOnInit() {
        console.log('TopbuttonsComponent called');
    }

    selectedSLegale(){
        this.stateService.go('stateone');
    }

    selectedSOperativa(){
        this.stateService.go('statetwo');
    }
}
