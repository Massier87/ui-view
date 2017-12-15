
import {Ng2StateDeclaration} from "ui-router-ng2";
import {TestviewComponent} from "./testview.component";
import {TopbuttonsComponent} from "./components/topbuttons/topbuttons.component";

export const TestViewState: Ng2StateDeclaration = {
    name: 'testview',
    url: '/testview',
    parent: 'layout',
   // redirectTo: 'testviewmain',
    views: {
        'container@app' : { component: TestviewComponent },
        'topbuttons@testview' : { component: TopbuttonsComponent }
    }

}
