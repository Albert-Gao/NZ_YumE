import {IStateService} from "../src/emulator/models/serviceModels/IStateService";
import {IPage} from "../src/emulator/models/dataModels/IPage";
import {IApp} from "../src/emulator/models/dataModels/IApp";
import {IElement} from "../src/emulator/models/dataModels/IElement";
import {IFunc} from "../src/emulator/models/dataModels/IFunction";
import {StateService} from "../src/emulator/services/StateService";
import {IActionService} from "../src/emulator/models/serviceModels/IActionService";

var _ = require('lodash');

it('true is true', () => expect(true).toEqual(true));

describe('Tests for the StateService', () => {
	class MockPage implements IPage {
		name: string; 
    	rawLayout:Array<IElement>;
    	//afterRenderLayout?:JQuery;
    	callback:Array<IFunc>;
	}
	let page1 = new MockPage();
	page1.name = "page1";
	let page2 = new MockPage();
	page2.name = "page2";

	let pageName: string = "page1";
	let appTitle: string = "Title";
    class MockApp implements IApp {
        title:string = appTitle;
	    currentPageName:string = pageName;
	    startPageName:string = pageName;
	    pages:Array<IPage> = [page1, page2];
	    injectActionService(as:IActionService) {};
	    startAddingPages() {};
	    CentralCallbackFunc(pageName:string, elementID?:string) {};
    }
    let testStateService: StateService = new StateService(new MockApp());  
    it('getStartPageName() should return the specified string', () => {
        let startPageName: string  = testStateService.getStartPageName();
        expect(startPageName).toEqual(pageName);
    });
    it('getStartPageName() should return a string', () => {
        let currentPageName: string = testStateService.getCurrentPageName();
        expect(currentPageName).toEqual(pageName);
    });
    it('setCurrentPageName() should set the name of the current page', () => {
    	let newName :string = "New Name";
    	testStateService.setCurrentPageName(newName);
        let currentPageName: string = testStateService.getCurrentPageName();
        expect(currentPageName).toEqual(newName);
    });
    it("getCurrentPage() should return an IPage object of the current page", () => {
    	let currentPage: IPage = testStateService.getCurrentPage();
    	expect(currentPage.name).toEqual("page1");
    });
});

/*Previous tests for reference
/// <reference path="../typings/jasmine/jasmine.d.ts" />

describe('Tests for the FindViewModel', () => {
    it('getKeyword() should return a string', () => {
        let returnValue: string = (new FindViewModel()).getKeyword();
        expect(returnValue).toEqual(jasmine.any(String));
    });

    it('getKeywordByVoice() should return a string', () => {
        let checkThisValue: string;
        class mockSpeech implements ISpeechService {
            recognize(): string {
                return checkThisValue;
            }
        }

        let testFindViewModel = new FindViewModel();
        let findKeywordByVoice = testFindViewModel.getKeywordByVoice(new mockSpeech());
        expect(findKeywordByVoice).toEqual(checkThisValue);
    });
});

describe('Test for the HistoryViewModel', () => {
    it('getHistoryList() should return something', () => {
        let vm = new HistoryViewModel(new StorageService());
        let returnValue: IListItem[] = vm.getHistoryList();
        expect(returnValue).not.toBeNull();
    });
});

describe('Test for the RecommendViewModel', () => {
    it('getHistoryList() should return something', () => {
        let vm = new RecommendViewModel(new StorageService());
        let returnValue: IListItem[] = vm.getHistoryList();
        expect(returnValue).not.toBeNull();
    });
});
*/