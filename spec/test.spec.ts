/// <reference path="../_typings/jasmine/jasmine.d.ts" />
import {IStateService} from "../src/emulator/models/serviceModels/IStateService";
import {IPage} from "../src/emulator/models/dataModels/IPage";
import {IApp} from "../src/emulator/models/dataModels/IApp";
import {IElement} from "../src/emulator/models/dataModels/IElement";
import {StateService} from "../src/emulator/services/StateService";
import {IActionService} from "../src/emulator/models/serviceModels/IActionService";

it('true is true', () => expect(true).toEqual(true));

describe('Tests for the StateService', () => {
    it('getStartPageName() should return a string', () => {
        let checkThisValue: string = "This Page";
        class MockApp implements IApp {
            title:string = "";
		    currentPageName:string = checkThisValue;
		    startPageName:string = checkThisValue;
		    pages:Array<IPage>;
		    injectActionService(as:IActionService) {};
		    startAddingPages() {};
		    CentralCallbackFunc(pageName:string, elementID?:string) {
		    	return "";
		    }
        }

        let testStateService: StateService = new StateService(new MockApp());
        let startPageName: string  = testStateService.getStartPageName();
        expect(startPageName).toEqual(checkThisValue);
    });
});