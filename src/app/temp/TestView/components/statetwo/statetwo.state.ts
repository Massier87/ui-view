
import {Ng2StateDeclaration} from "ui-router-ng2";
import {StatetwoComponent} from "./statetwo.component";


export const StateTwoState: Ng2StateDeclaration = {
    name: 'statetwo',
    url: '/statetwo',
    parent: 'testviewmain',
    views: {
        'container-view@testview' : {component: StatetwoComponent}
    }

}
