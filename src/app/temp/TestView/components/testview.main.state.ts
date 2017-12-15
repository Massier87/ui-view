
import {Ng2StateDeclaration} from "ui-router-ng2";
import {TestviewComponent} from "../testview.component";
import {TestviewMainComponent} from "./testview.main.component";
import {StateoneComponent} from "./stateone/stateone.component";
import {StatetwoComponent} from "./statetwo/statetwo.component";
import {DefaultComponent} from "./defualtstate/default.component";


export const TestViewMainState: Ng2StateDeclaration = {
    name: 'testviewmain',
    url: '/testviewmain',
    parent: 'testview',
    views: {
        'testview@testview' : { component: TestviewMainComponent },
        'container-view@testview' : {component: DefaultComponent}
    }

}
