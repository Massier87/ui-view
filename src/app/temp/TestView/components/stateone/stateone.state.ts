
import {Ng2StateDeclaration} from "ui-router-ng2";
import {StateoneComponent} from "./stateone.component";


export const StateOneState: Ng2StateDeclaration = {
    name: 'stateone',
    url: '/stateone',
    parent: 'testviewmain',
    views: {
        'container-view@testview' : {component: StateoneComponent}
    }
}
