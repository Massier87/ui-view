
import {Component,OnInit} from "@angular/core";
import {StateService} from '@uirouter/core';

/*'<div class="section vertical-container">' +
'<ui-view name="topbuttons"></ui-view>' +
'<ui-view class="mt-4" name="testview"></ui-view>' +
'</div>'*/

@Component({
    selector: 'testviewmain',
    template: '<div class="section vertical-container">' +
                 //   '<ui-view>' +
                    '<ui-view name="container-view"></ui-view>' +
                //    '</ui-view>' +
                '</div>'
})
export class TestviewMainComponent implements OnInit{

    constructor( private stateService: StateService){}

    ngOnInit() {
        console.log('TestviewMainComponent called ');
        this.stateService.go('stateone');
    }
}
