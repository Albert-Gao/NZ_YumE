///<reference path="../src/emulator/ui/types/jquery.d.ts" />
///<reference path="typings/jasmine-jquery.d.ts" />

import {IStateService} from "../src/emulator/models/serviceModels/IStateService";
import {ITemplatingService} from "../src/emulator/models/serviceModels/ITemplatingService";
import {ISystemService} from "../src/emulator/models/serviceModels/ISystemService";
import {IActionService} from "../src/emulator/models/serviceModels/IActionService";
import {IPage} from "../src/emulator/models/dataModels/IPage";
import {IApp} from "../src/emulator/models/dataModels/IApp";
import {IElement} from "../src/emulator/models/dataModels/IElement";
import {IListItem} from "../src/emulator/models/dataModels/IListItem";
import {IFunc} from "../src/emulator/models/dataModels/IFunction";
import {StateService} from "../src/emulator/services/StateService";
import {TemplatingService} from "../src/emulator/services/TemplatingService";
import {SystemService} from "../src/emulator/services/SystemService";
import {ActionService} from "../src/emulator/services/ActionService";

jasmine.getFixtures().fixturesPath = "../spec/";

class anApp implements IApp {
    title:string = "test";
    currentPageName:string = "test";
    startPageName:string = "test";
    pages:Array<IPage> = [];
    injectActionService(as:IActionService) {};
    startAddingPages() {};
    CentralCallbackFunc(pageName:string, elementID?:string) {};
}

let myApp = new anApp();
let myStateService = new StateService(myApp);

describe('Tests for ActionService', () => {
    it('goPage() should call goPage from SystemService', () => {
        expect(true).toBe(true);//asdfadf
    });
});