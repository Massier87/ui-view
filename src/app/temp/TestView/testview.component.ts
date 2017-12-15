
import {Component,OnInit} from "@angular/core";

@Component({
    selector: 'testview',
    template: '<div class="section vertical-container">' +
                '<ui-view name="topbuttons"></ui-view>' +
                '<ui-view class="mt-4" name="testview"></ui-view>' +
            '</div>'
})
export class TestviewComponent implements OnInit{

    constructor(){

    }

    ngOnInit() {
        console.log('TestviewComponent called');
    }
}
