///<reference path="../src/emulator/ui/types/jquery.d.ts"/>

import {IStateService} from "../src/emulator/models/serviceModels/IStateService";
import {IPage} from "../src/emulator/models/dataModels/IPage";
import {IApp} from "../src/emulator/models/dataModels/IApp";
import {IElement} from "../src/emulator/models/dataModels/IElement";
import {IListItem} from "../src/emulator/models/dataModels/IListItem";
import {IFunc} from "../src/emulator/models/dataModels/IFunction";
import {StateService} from "../src/emulator/services/StateService";
import {IActionService} from "../src/emulator/models/serviceModels/IActionService";

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
let myMockApp = new MockApp();

/*class MockSystemService implements ISystemService{
    _stateService:IStateService;
    _templatingService:ITemplatingService;
    removeCurrentPageFromScreen();
    goPage(name:string);
    renewCurrentPage(name:string);
    goStartPage();
    renderAllPages();
    showSplashScreen();
    hideSplashScreen();
    showNotification(text:string);
}*/


describe('Tests for StateService', () => {
    let testStateService: StateService = new StateService(myMockApp);  
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
        testStateService.setCurrentPageName(pageName); 
        //as "new name" is not actually a page
    });
    it("getCurrentPage() should return an IPage object of the current page", () => {
    	let currentPage: IPage = testStateService.getCurrentPage();
    	expect(currentPage.name).toEqual("page1");
    });
    it("getPage() should return an IPage object with the specified name", () => {
    	let page: IPage = testStateService.getPage("page2");
    	expect(page.name).toEqual("page2");
    });
    it("getPage() should return undefined if a string that does not match" +
    	" an existing page name is passed to it", () => {
    	let page: IPage = testStateService.getPage("page3");
    	expect(page).toEqual(undefined);
    });
    it("getPages() should return an array of all the pages the app contains", () => {
    	let pages: Array<IPage> = testStateService.getPages();
    	expect(pages).toEqual([page1, page2]);
    });
    it("emulatorCentralCallBack() to call CentralCallbackFunc()", () => {
    	spyOn(myMockApp, 'CentralCallbackFunc');
	    class MockElement implements IElement {
	    	type: "image";
		    name:string;
		    //targetElementID?:string;
		    define:string|Array<IListItem>;
	    }
	    let aMockElement = new MockElement();
	    aMockElement.name = "testName";
    	testStateService.emulatorCentralCallBack(aMockElement);
    	expect(myMockApp.CentralCallbackFunc).toHaveBeenCalledWith("testName");
    	testStateService.emulatorCentralCallBack(aMockElement, "test");
    	expect(myMockApp.CentralCallbackFunc).toHaveBeenCalledWith("testName", "test");
    });
    it("getAppCallBack() should return the correct function", () => {
    	let fn = testStateService.getAppCallBack();
    	expect(fn("test", "test")).toEqual(myMockApp.CentralCallbackFunc("test", "test"));
    })
});

describe('Tests for TemplatingService', () => {

});

describe('Tests for SystemService', () => {

});

describe('Tests for ActionService', () => {

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