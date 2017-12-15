
import {Ng2StateDeclaration} from "ui-router-ng2";
import {DefaultComponent} from "./default.component";



export const DefaultState: Ng2StateDeclaration = {
    name: 'default',
    url: '/default',
    parent: 'testviewmain',
    views: {
        'container-view@testview' : {component: DefaultComponent}
    }
}
