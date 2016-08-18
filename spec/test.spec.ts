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
//need to launch Chrome/Chromium with --allow-file-access-from-files option
//for fixtures to work. Works in standard FireFox.
//see https://github.com/velesin/jasmine-jquery#cross-domain-policy-problems-under-chrome
//can load a fixture with loadFixtures('myFixture.html');

class MockElement implements IElement {
	type;
    name:string;
    targetElementID:string;
    define:string|Array<IListItem>;
}
let aMockElement = new MockElement();
aMockElement.type = "text";
aMockElement.name = "testName";
let testText: string = "Some text to test with";
aMockElement.define = testText;

class MockPage implements IPage {
	name: string; 
	rawLayout:Array<IElement>;
	afterRenderLayout: JQuery;
	callback:Array<IFunc>;
}
let page1 = new MockPage();
page1.name = "page1";
page1.rawLayout = [aMockElement];
page1.callback = [{
	bindToName : "testName",
	callbackFunction : function(){
		console.log("OK");
	}
}];
let page2 = new MockPage();
page2.name = "page2";

let pageName: string = "page1";
let appTitle: string = "Title";
class MockApp implements IApp {
    title:string = appTitle;
    currentPageName:string = pageName;
    startPageName:string = pageName;
    pages:Array<IPage> = [page1, page2];
	_as:IActionService;
    injectActionService(as:IActionService) {
		this._as = as;
	};
    startAddingPages() {
		this.pages.push(page1);
		this.pages.push(page2);
	};
    CentralCallbackFunc(pageName:string, elementID?:string) {
		// let findpage:IPage;
		// for (let page of this.pages){
		// 	if (page.name ==='pageName'){
		// 		findpage = page;
		// 		break
		// 	}
		// }
		// for (let func of findpage.callback){
		// 	if (func.bindToName == elementID){
		// 		func.callbackFunction();
		// 	}
		// }
	};
}
let myMockApp = new MockApp();

describe('Tests for StateService', () => {
    let testStateService: StateService = new StateService(myMockApp);  
    it('getStartPageName() should return the specified string', () => {
        let startPageName: string  = testStateService.getStartPageName();
        expect(startPageName).toEqual(pageName);
    });
    it('getCurrentPageName() should return the correct string', () => {
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
    	testStateService.emulatorCentralCallBack(aMockElement);
    	expect(myMockApp.CentralCallbackFunc).toHaveBeenCalledWith(page1.name, "testName");
    	testStateService.emulatorCentralCallBack(aMockElement, "test");
    	expect(myMockApp.CentralCallbackFunc).toHaveBeenCalledWith(page1.name, "testName", "test");
    });
    it("getAppCallBack() should return the correct function", () => {
    	let fn = testStateService.getAppCallBack();
    	expect(fn("test", "test")).toEqual(myMockApp.CentralCallbackFunc("test", "test"));
    })
});

class MockStateService implements IStateService{
    _app:IApp = myMockApp;
    getCurrentPage():IPage {return page1};
    getCurrentPageName():string {return page1.name};
    getStartPageName():string {return page1.name};
    setCurrentPageName(name:string) {page1.name = name};
    getPages():Array<IPage> {return myMockApp.pages};
    getPage(name:string ):IPage {return page1};
    getAppCallBack:(element:IElement,targetElementInfo?:string) => void;
    emulatorCentralCallBack(element:IElement,targetElementInfo?:string) {};
}
let myMockStateService = new MockStateService();

describe('Tests for TemplatingService', () => {
	let testTemplatingService: TemplatingService = new TemplatingService(myMockStateService);
	describe('createPage() should return a jQuery object', () => {
		let testPage = new MockPage();
		testPage.name = "testPage";
		it('that for button type contains right ID, classes, definition', () => {
			let buttonElement = new MockElement();
			buttonElement.type = "button"; buttonElement.name = "buttonElement";
	    	buttonElement.define = "buttonElementDefinition";
	    	testPage.rawLayout = [buttonElement];
	    	let aJQObject: JQuery  = testTemplatingService.createPage(testPage);
	    	expect($("button", aJQObject).attr("id")).toEqual(buttonElement.name);
	    	expect($(".btn", aJQObject)).toHaveText(<string>buttonElement.define);
	    });
	    it('that for text type contains right ID, p and text elements', () => {
	    	let textElement = new MockElement();
	    	textElement.type = "text"; textElement.name = "textElement";
	    	textElement.define = "textElementDefinition";
	    	testPage.rawLayout = [textElement];
	        let aJQObject: JQuery  = testTemplatingService.createPage(testPage);
	        expect($("#textElement", aJQObject)).toExist();
	        expect($("p", aJQObject)).toHaveText(<string>textElement.define);
	    });
	    it('that for image type contains right ID, class, img attr and img source', () => {
	    	let imageElement = new MockElement();
	    	imageElement.type = "image"; imageElement.name = "imageElement";
	    	imageElement.define = "imageElementDefinition";
	    	testPage.rawLayout = [imageElement];
	    	let aJQObject: JQuery  = testTemplatingService.createPage(testPage);
	    	expect($("#imageElement", aJQObject)).toExist();
	    	expect($(".img-fluid", aJQObject)).toExist();
	        expect($("img", aJQObject).attr("src")).toEqual(imageElement.define);
	    });
	    it('that for input type contains the right classes, attributes and text', () => {
	    	let inputElement = new MockElement();
	    	inputElement.type = "input"; inputElement.name = "inputElement";
	    	inputElement.define = "inputElementDefinition";
	    	testPage.rawLayout = [inputElement];
	    	let aJQObject: JQuery  = testTemplatingService.createPage(testPage);
	    	expect($(".form-group", aJQObject)).toExist();
	    	expect($(".sr-only", aJQObject)).toExist();
	    	expect($(".form-control", aJQObject)).toExist();
	    	expect($("label", aJQObject).attr("for")).toEqual(inputElement.name);
	    	expect($("input", aJQObject).attr("type")).toEqual("text");
	    	expect($("input", aJQObject).attr("id")).toEqual(inputElement.name);
	    	expect($("input", aJQObject).attr("for")).toEqual(inputElement.name);
	    	expect($("input", aJQObject).attr("placeholder")).toEqual(inputElement.define);
	    	expect($("input", aJQObject)).toHaveText(<string>inputElement.define);
	    });
	    it('that for list type contains the right classes and descriptions', () => {
	    	let listElement = new MockElement();
	    	listElement.type = "list"; listElement.name = "listElement";
	    	listElement.define = 
	    	[{title: "item1", description: "item1Desc", url: "item1url"},
	    	 {title: "item2", description: "item2Desc", url: "item2url"}];
	    	testPage.rawLayout = [listElement];
	    	let aJQObject: JQuery  = testTemplatingService.createPage(testPage);
	    	expect($(".list-group", aJQObject)).toExist();
	    	expect($("h5", aJQObject)).toHaveHtml("item1");
	    	expect($("h5:nth(1)", aJQObject)).toHaveHtml("item2");
	    	expect($("p", aJQObject)).toHaveHtml("item1Desc");
	    	expect($("p:nth(1)", aJQObject)).toHaveHtml("item2Desc");
	    	//console.log($("h5:nth(1)", aJQObject)[0].outerHTML);
	    });
	});
    it('createPagesAndSave() should call createPage the right number of times', () => {
    	spyOn(testTemplatingService, 'createPage');
    	testTemplatingService.createPagesAndSave();
        expect(testTemplatingService.createPage.calls.count()).toBe(2);
    });
    it('createLayout() should return a jQuery object with a div of class conatiner-fluid', () => {
    	let aJQObject: JQuery  = testTemplatingService.createLayout();
        expect($(aJQObject)).toHaveClass("container-fluid");
    	expect($(aJQObject)).toEqual("div");
    });
    it('removeElementFromDOM() should remove the specified element from the DOM', () => {
    	setFixtures("<div class='container-fluid'></div>");
    	expect($(".container-fluid")).toExist();
        testTemplatingService.removeElementFromDOM(".container-fluid");
        expect($(".container-fluid")).not.toExist();
    });
    it('createjQueryItem() should return the correct jQuery object', () => {
    	let aJQItem: JQuery = testTemplatingService.createjQueryItem("div",
    		 [{key:"id", value:"testID"}], "testClass", "testString");
        //Note that for below, don't need a selector, as the object is just one element.
        //When passing a selector and context, only searches within that context, not including
        //the parent, so $(#testID, aJQItem) will return an empty jQuery object
        expect($(aJQItem)).toHaveId("testID");
        expect($(aJQItem)).toHaveClass("testClass");
        //below is just a reminder on how to see the actual html for debugging as needed
        //expect(aJQItem[0].outerHTML).toHaveId("testID");
    });
});

class MockTemplatingService implements ITemplatingService{
	_stateService:IStateService;
    createPage(page:IPage):JQuery {return $(document.createElement("div"))
    												.addClass("testingClass")};
    createPagesAndSave() {};
    createLayout():JQuery {return $(document.createElement("div"))};
    removeElementFromDOM(className:string) {};
    createjQueryItem(type:string,
                     attrs?:Array<{key:string,value:string}>,
                     styleClasses?:string,
                     text?:string): JQuery {return $(document.createElement("div"))
    												.addClass("testingClass")};
}

let myMockTemplatingService = new MockTemplatingService();

describe('Tests for SystemService method', () => {
	let testSystemService: SystemService = new SystemService(myMockTemplatingService, 
															 myMockStateService); 
	it('removeCurrentPageFromScreen() should remove the current page from the DOM', () => {
    	spyOn(myMockTemplatingService, "removeElementFromDOM");
    	testSystemService.removeCurrentPageFromScreen();
    	expect(myMockTemplatingService.removeElementFromDOM)
    					.toHaveBeenCalledWith(".container-fluid");
    });
	it('goPage() should remove the current page, and show the new one', () => {
		page2.afterRenderLayout = $(document.createElement("div")).addClass("second")
		setFixtures("<div class='emulator'></div>");
		expect($(".second")).not.toExist();
        spyOn(testSystemService, "removeCurrentPageFromScreen");
        spyOn(testSystemService, "renewCurrentPage");
        testSystemService.goPage("page2");
        expect(testSystemService.removeCurrentPageFromScreen).toHaveBeenCalled();
        expect(testSystemService.renewCurrentPage).toHaveBeenCalledWith("page2");
        expect($(".second")).toExist();
    });
    describe('renderAllPages() should', () => {
	    it('if called with a page, should rerender the page', () => {
            spyOn(myMockTemplatingService, "createPage").and.callThrough();
            spyOn(myMockStateService, "getPage").and.callThrough();
            expect($(page1.afterRenderLayout)).not.toExist();
            testSystemService.renderAllPages(page1);
            expect(myMockTemplatingService.createPage).toHaveBeenCalledWith(page1);
            expect(myMockStateService.getPage).toHaveBeenCalledWith(page1.name);
            expect($(page1.afterRenderLayout)).toExist();
	    });
	    it('if called with no arguments, call createPagesAndSave()', () => {
	    	spyOn(myMockTemplatingService, "createPagesAndSave");
	    	testSystemService.renderAllPages();
	    	expect(myMockTemplatingService.createPagesAndSave).toHaveBeenCalledWith();
	    });
    });
    it('goStartPage() should call getStartPageName and goPage', () => {
    	//this.goPage(this._stateService.getStartPageName());
    	spyOn(myMockStateService, "getStartPageName");
    	spyOn(testSystemService, "goPage");
    	testSystemService.goStartPage();
    	expect(myMockStateService.getStartPageName).toHaveBeenCalled();
    	expect(testSystemService.goPage).toHaveBeenCalled();
    });
    it('renewCurrentPage() should call setCurrentPageName from StateService', () => {
        spyOn(myMockStateService, "setCurrentPageName");
        testSystemService.renewCurrentPage("testName");
        expect(myMockStateService.setCurrentPageName)
        						 .toHaveBeenCalledWith("testName");	
    });
    it('startEmulator() should call hideSplashScreen,' + 
    		'renderAllPages and goStartPage', (done) => {
    	spyOn(testSystemService, "hideSplashScreen");
    	spyOn(testSystemService, "renderAllPages");
    	spyOn(testSystemService, "goStartPage");
    	testSystemService.startEmulator();

    	let POLL_TIME = 10;
    	let endTime = new Date().getTime() + 10000;
    	let checkCondition = () => {
        	if (new Date().getTime() <= endTime && 
        		testSystemService.goStartPage.calls.count() < 1) {
            	setTimeout(checkCondition, POLL_TIME);
            } else {   
		    	expect(testSystemService.hideSplashScreen).toHaveBeenCalled();
		    	expect(testSystemService.renderAllPages).toHaveBeenCalled();
		    	expect(testSystemService.goStartPage).toHaveBeenCalled();
                done();
            }
        };
        checkCondition();
    }, 10000);
    it('hideSplashScreen() should hide the splash screen', () => {
    	setFixtures("<div class='splashScreen'></div>");
    	expect($(".splashScreen")).toBeVisible();
        testSystemService.hideSplashScreen();
        expect($(".splashScreen")).not.toBeVisible();
    });
    it('showNotification() should show a notification, and then fade it out', (done) => {
    	setFixtures("<div class='emulator'></div>");
    	expect($(".testingClass")).not.toBeVisible();
    	testSystemService.showNotification("blah");
    	expect($(".testingClass")).toBeVisible();

    	let POLL_TIME = 10;
    	let endTime = new Date().getTime() + 5000;
    	let checkCondition = () => {
        	if (new Date().getTime() <= endTime && 
        		$(".testingClass").is(":visible")) {
            	setTimeout(checkCondition, POLL_TIME);
            } else {
				expect($(".testingClass")).not.toBeVisible();
                done();
            }
        };
        checkCondition();
    }, 5000);
});

describe('Tests for ActionService', () => {
	//don't need a proper mock for SystemService here, as shadowing all its required
	//functions with spies
	let myMockSystemService = new SystemService(myMockTemplatingService, myMockStateService);
	let testActionService = new ActionService(myMockSystemService);
	it('goPage() should call goPage from SystemService', () => {
		spyOn(myMockSystemService, "goPage");
		testActionService.goPage("page1");
		expect(myMockSystemService.goPage).toHaveBeenCalledWith("page1");
    });
    it('showNotification() should call showNotification from SystemService', () => {
    	spyOn(myMockSystemService, "showNotification");
		testActionService.showNotification("showNotification");
		expect(myMockSystemService.showNotification).toHaveBeenCalledWith("showNotification");
    });
    it('reRenderPage() should renderAllPages from SystemService', () => {
    	spyOn(myMockSystemService, "renderAllPages");
		testActionService.reRenderPage(page1);
		expect(myMockSystemService.renderAllPages).toHaveBeenCalledWith(page1);
    });
});

describe('Tests for Application part', ()=>{
    let testStateService: StateService = new StateService(myMockApp);  	
	let myMockSystemService = new SystemService(myMockTemplatingService, myMockStateService);	
	let testActionService = new ActionService(myMockSystemService);
	
	it('inActionService() shoule store the service to MockApp object', ()=>{
		myMockApp.injectActionService(testActionService);
		expect(myMockApp._as).toBe(testActionService);
	});

	it('startAddingPages() should add page1,page2 objects into pages property',()=>{
		myMockApp.startAddingPages();
		expect(myMockApp.pages).toContain(page1);
	});

	it('CentralCallbackFunc should find the proper function and invoke it',()=>{
		let fn = testStateService.getAppCallBack();
    	expect(fn("test", "test")).toEqual(myMockApp.CentralCallbackFunc("test", "test"));
	});
});