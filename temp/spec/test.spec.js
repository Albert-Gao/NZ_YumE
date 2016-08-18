"use strict";
var StateService_1 = require("../src/emulator/services/StateService");
var TemplatingService_1 = require("../src/emulator/services/TemplatingService");
var SystemService_1 = require("../src/emulator/services/SystemService");
var ActionService_1 = require("../src/emulator/services/ActionService");
var application_1 = require("../src/application/application");
jasmine.getFixtures().fixturesPath = "../spec/";
var MockElement = (function () {
    function MockElement() {
    }
    return MockElement;
}());
var aMockElement = new MockElement();
aMockElement.type = "text";
aMockElement.name = "testName";
var testText = "Some text to test with";
aMockElement.define = testText;
var MockPage = (function () {
    function MockPage() {
    }
    return MockPage;
}());
var page1 = new MockPage();
page1.name = "page1";
page1.rawLayout = [aMockElement];
page1.callback = [{
        bindToName: "testName",
        callbackFunction: function () {
            console.log("OK");
        }
    }];
var page2 = new MockPage();
page2.name = "page2";
var pageName = "page1";
var appTitle = "Title";
var MockApp = (function () {
    function MockApp() {
        this.title = appTitle;
        this.currentPageName = pageName;
        this.startPageName = pageName;
        this.pages = [page1, page2];
    }
    MockApp.prototype.injectActionService = function (as) {
        this._as = as;
    };
    ;
    MockApp.prototype.startAddingPages = function () {
        this.pages.push(page1);
        this.pages.push(page2);
    };
    ;
    MockApp.prototype.CentralCallbackFunc = function (pageName, elementID) { };
    ;
    return MockApp;
}());
var myMockApp = new MockApp();
describe('Tests for StateService', function () {
    var testStateService = new StateService_1.StateService(myMockApp);
    it('getStartPageName() should return the specified string', function () {
        var startPageName = testStateService.getStartPageName();
        expect(startPageName).toEqual(pageName);
    });
    it('getCurrentPageName() should return the correct string', function () {
        var currentPageName = testStateService.getCurrentPageName();
        expect(currentPageName).toEqual(pageName);
    });
    it('setCurrentPageName() should set the name of the current page', function () {
        var newName = "New Name";
        testStateService.setCurrentPageName(newName);
        var currentPageName = testStateService.getCurrentPageName();
        expect(currentPageName).toEqual(newName);
        testStateService.setCurrentPageName(pageName);
    });
    it("getCurrentPage() should return an IPage object of the current page", function () {
        var currentPage = testStateService.getCurrentPage();
        expect(currentPage.name).toEqual("page1");
    });
    it("getPage() should return an IPage object with the specified name", function () {
        var page = testStateService.getPage("page2");
        expect(page.name).toEqual("page2");
    });
    it("getPage() should return undefined if a string that does not match" +
        " an existing page name is passed to it", function () {
        var page = testStateService.getPage("page3");
        expect(page).toEqual(undefined);
    });
    it("getPages() should return an array of all the pages the app contains", function () {
        var pages = testStateService.getPages();
        expect(pages).toEqual([page1, page2]);
    });
    it("emulatorCentralCallBack() to call CentralCallbackFunc()", function () {
        spyOn(myMockApp, 'CentralCallbackFunc');
        testStateService.emulatorCentralCallBack(aMockElement);
        expect(myMockApp.CentralCallbackFunc).toHaveBeenCalledWith(page1.name, "testName");
        testStateService.emulatorCentralCallBack(aMockElement, "test");
        expect(myMockApp.CentralCallbackFunc).toHaveBeenCalledWith(page1.name, "testName", "test");
    });
    it("getAppCallBack() should return the correct function", function () {
        var fn = testStateService.getAppCallBack();
        expect(fn("test", "test")).toEqual(myMockApp.CentralCallbackFunc("test", "test"));
    });
});
var MockStateService = (function () {
    function MockStateService() {
        this._app = myMockApp;
    }
    MockStateService.prototype.getCurrentPage = function () { return page1; };
    ;
    MockStateService.prototype.getCurrentPageName = function () { return page1.name; };
    ;
    MockStateService.prototype.getStartPageName = function () { return page1.name; };
    ;
    MockStateService.prototype.setCurrentPageName = function (name) { page1.name = name; };
    ;
    MockStateService.prototype.getPages = function () { return myMockApp.pages; };
    ;
    MockStateService.prototype.getPage = function (name) { return page1; };
    ;
    MockStateService.prototype.emulatorCentralCallBack = function (element, targetElementInfo) { };
    ;
    return MockStateService;
}());
var myMockStateService = new MockStateService();
describe('Tests for TemplatingService', function () {
    var testTemplatingService = new TemplatingService_1.TemplatingService(myMockStateService);
    describe('createPage() should return a jQuery object', function () {
        var testPage = new MockPage();
        testPage.name = "testPage";
        it('that for button type contains right ID, classes, definition', function () {
            var buttonElement = new MockElement();
            buttonElement.type = "button";
            buttonElement.name = "buttonElement";
            buttonElement.define = "buttonElementDefinition";
            testPage.rawLayout = [buttonElement];
            var aJQObject = testTemplatingService.createPage(testPage);
            expect($("button", aJQObject).attr("id")).toEqual(buttonElement.name);
            expect($(".btn", aJQObject)).toHaveText(buttonElement.define);
        });
        it('that for text type contains right ID, p and text elements', function () {
            var textElement = new MockElement();
            textElement.type = "text";
            textElement.name = "textElement";
            textElement.define = "textElementDefinition";
            testPage.rawLayout = [textElement];
            var aJQObject = testTemplatingService.createPage(testPage);
            expect($("#textElement", aJQObject)).toExist();
            expect($("p", aJQObject)).toHaveText(textElement.define);
        });
        it('that for image type contains right ID, class, img attr and img source', function () {
            var imageElement = new MockElement();
            imageElement.type = "image";
            imageElement.name = "imageElement";
            imageElement.define = "../dist/assets/food.png";
            testPage.rawLayout = [imageElement];
            var aJQObject = testTemplatingService.createPage(testPage);
            expect($("#imageElement", aJQObject)).toExist();
            expect($(".img-fluid", aJQObject)).toExist();
            expect($("img", aJQObject).attr("src")).toEqual(imageElement.define);
        });
        it('that for input type contains the right classes, attributes and text', function () {
            var inputElement = new MockElement();
            inputElement.type = "input";
            inputElement.name = "inputElement";
            inputElement.define = "inputElementDefinition";
            testPage.rawLayout = [inputElement];
            var aJQObject = testTemplatingService.createPage(testPage);
            expect($(".form-group", aJQObject)).toExist();
            expect($(".sr-only", aJQObject)).toExist();
            expect($(".form-control", aJQObject)).toExist();
            expect($("label", aJQObject).attr("for")).toEqual(inputElement.name);
            expect($("input", aJQObject).attr("type")).toEqual("text");
            expect($("input", aJQObject).attr("id")).toEqual(inputElement.name);
            expect($("input", aJQObject).attr("for")).toEqual(inputElement.name);
            expect($("input", aJQObject).attr("placeholder")).toEqual(inputElement.define);
            expect($("input", aJQObject)).toHaveText(inputElement.define);
        });
        it('that for list type contains the right classes and descriptions', function () {
            var listElement = new MockElement();
            listElement.type = "list";
            listElement.name = "listElement";
            listElement.define =
                [{ title: "item1", description: "item1Desc", url: "item1url" },
                    { title: "item2", description: "item2Desc", url: "item2url" }];
            testPage.rawLayout = [listElement];
            var aJQObject = testTemplatingService.createPage(testPage);
            expect($(".list-group", aJQObject)).toExist();
            expect($("h5", aJQObject)).toHaveHtml("item1");
            expect($("h5:nth(1)", aJQObject)).toHaveHtml("item2");
            expect($("p", aJQObject)).toHaveHtml("item1Desc");
            expect($("p:nth(1)", aJQObject)).toHaveHtml("item2Desc");
        });
    });
    it('createPagesAndSave() should call createPage the right number of times', function () {
        spyOn(testTemplatingService, 'createPage');
        testTemplatingService.createPagesAndSave();
        expect(testTemplatingService.createPage.calls.count()).toBe(2);
    });
    it('createLayout() should return a jQuery object with a div of class conatiner-fluid', function () {
        var aJQObject = testTemplatingService.createLayout();
        expect($(aJQObject)).toHaveClass("container-fluid");
        expect($(aJQObject)).toEqual("div");
    });
    it('removeElementFromDOM() should remove the specified element from the DOM', function () {
        setFixtures("<div class='container-fluid'></div>");
        expect($(".container-fluid")).toExist();
        testTemplatingService.removeElementFromDOM(".container-fluid");
        expect($(".container-fluid")).not.toExist();
    });
    it('createjQueryItem() should return the correct jQuery object', function () {
        var aJQItem = testTemplatingService.createjQueryItem("div", [{ key: "id", value: "testID" }], "testClass", "testString");
        expect($(aJQItem)).toHaveId("testID");
        expect($(aJQItem)).toHaveClass("testClass");
    });
});
var MockTemplatingService = (function () {
    function MockTemplatingService() {
    }
    MockTemplatingService.prototype.createPage = function (page) {
        return $(document.createElement("div"))
            .addClass("testingClass");
    };
    ;
    MockTemplatingService.prototype.createPagesAndSave = function () { };
    ;
    MockTemplatingService.prototype.createLayout = function () { return $(document.createElement("div")); };
    ;
    MockTemplatingService.prototype.removeElementFromDOM = function (className) { };
    ;
    MockTemplatingService.prototype.createjQueryItem = function (type, attrs, styleClasses, text) {
        return $(document.createElement("div"))
            .addClass("testingClass");
    };
    ;
    return MockTemplatingService;
}());
var myMockTemplatingService = new MockTemplatingService();
describe('Tests for SystemService method', function () {
    var testSystemService = new SystemService_1.SystemService(myMockTemplatingService, myMockStateService);
    it('removeCurrentPageFromScreen() should remove the current page from the DOM', function () {
        spyOn(myMockTemplatingService, "removeElementFromDOM");
        testSystemService.removeCurrentPageFromScreen();
        expect(myMockTemplatingService.removeElementFromDOM)
            .toHaveBeenCalledWith(".container-fluid");
    });
    it('goPage() should remove the current page, and show the new one', function () {
        page2.afterRenderLayout = $(document.createElement("div")).addClass("second");
        setFixtures("<div class='emulator'></div>");
        expect($(".second")).not.toExist();
        spyOn(testSystemService, "removeCurrentPageFromScreen");
        spyOn(testSystemService, "renewCurrentPage");
        testSystemService.goPage("page2");
        expect(testSystemService.removeCurrentPageFromScreen).toHaveBeenCalled();
        expect(testSystemService.renewCurrentPage).toHaveBeenCalledWith("page2");
        expect($(".second")).toExist();
    });
    describe('renderAllPages() should', function () {
        it('if called with a page, should rerender the page', function () {
            spyOn(myMockTemplatingService, "createPage").and.callThrough();
            spyOn(myMockStateService, "getPage").and.callThrough();
            expect($(page1.afterRenderLayout)).not.toExist();
            testSystemService.renderAllPages(page1);
            expect(myMockTemplatingService.createPage).toHaveBeenCalledWith(page1);
            expect(myMockStateService.getPage).toHaveBeenCalledWith(page1.name);
            expect($(page1.afterRenderLayout)).toExist();
        });
        it('if called with no arguments, call createPagesAndSave()', function () {
            spyOn(myMockTemplatingService, "createPagesAndSave");
            testSystemService.renderAllPages();
            expect(myMockTemplatingService.createPagesAndSave).toHaveBeenCalledWith();
        });
    });
    it('goStartPage() should call getStartPageName and goPage', function () {
        spyOn(myMockStateService, "getStartPageName");
        spyOn(testSystemService, "goPage");
        testSystemService.goStartPage();
        expect(myMockStateService.getStartPageName).toHaveBeenCalled();
        expect(testSystemService.goPage).toHaveBeenCalled();
    });
    it('renewCurrentPage() should call setCurrentPageName from StateService', function () {
        spyOn(myMockStateService, "setCurrentPageName");
        testSystemService.renewCurrentPage("testName");
        expect(myMockStateService.setCurrentPageName)
            .toHaveBeenCalledWith("testName");
    });
    it('startEmulator() should call hideSplashScreen,' +
        'renderAllPages and goStartPage', function (done) {
        spyOn(testSystemService, "hideSplashScreen");
        spyOn(testSystemService, "renderAllPages");
        spyOn(testSystemService, "goStartPage");
        testSystemService.startEmulator();
        var POLL_TIME = 10;
        var endTime = new Date().getTime() + 10000;
        var checkCondition = function () {
            if (new Date().getTime() <= endTime &&
                testSystemService.goStartPage.calls.count() < 1) {
                setTimeout(checkCondition, POLL_TIME);
            }
            else {
                expect(testSystemService.hideSplashScreen).toHaveBeenCalled();
                expect(testSystemService.renderAllPages).toHaveBeenCalled();
                expect(testSystemService.goStartPage).toHaveBeenCalled();
                done();
            }
        };
        checkCondition();
    }, 10000);
    it('hideSplashScreen() should hide the splash screen', function () {
        setFixtures("<div class='splashScreen'></div>");
        expect($(".splashScreen")).toBeVisible();
        testSystemService.hideSplashScreen();
        expect($(".splashScreen")).not.toBeVisible();
    });
    it('showNotification() should show a notification, and then fade it out', function (done) {
        setFixtures("<div class='emulator'></div>");
        expect($(".testingClass")).not.toBeVisible();
        testSystemService.showNotification("blah");
        expect($(".testingClass")).toBeVisible();
        var POLL_TIME = 10;
        var endTime = new Date().getTime() + 5000;
        var checkCondition = function () {
            if (new Date().getTime() <= endTime &&
                $(".testingClass").is(":visible")) {
                setTimeout(checkCondition, POLL_TIME);
            }
            else {
                expect($(".testingClass")).not.toBeVisible();
                done();
            }
        };
        checkCondition();
    }, 5000);
});
describe('Tests for ActionService', function () {
    var myMockSystemService = new SystemService_1.SystemService(myMockTemplatingService, myMockStateService);
    var testActionService = new ActionService_1.ActionService(myMockSystemService);
    it('goPage() should call goPage from SystemService', function () {
        spyOn(myMockSystemService, "goPage");
        testActionService.goPage("page1");
        expect(myMockSystemService.goPage).toHaveBeenCalledWith("page1");
    });
    it('showNotification() should call showNotification from SystemService', function () {
        spyOn(myMockSystemService, "showNotification");
        testActionService.showNotification("showNotification");
        expect(myMockSystemService.showNotification).toHaveBeenCalledWith("showNotification");
    });
    it('reRenderPage() should renderAllPages from SystemService', function () {
        spyOn(myMockSystemService, "renderAllPages");
        testActionService.reRenderPage(page1);
        expect(myMockSystemService.renderAllPages).toHaveBeenCalledWith(page1);
    });
});
var MockActionService = (function () {
    function MockActionService() {
        this._systemService = new SystemService_1.SystemService(myMockTemplatingService, myMockStateService);
    }
    MockActionService.prototype.goPage = function (name) { };
    ;
    MockActionService.prototype.showNotification = function (words) { };
    ;
    MockActionService.prototype.callYelpSearchAPI = function (keywords, callback) { };
    ;
    MockActionService.prototype.reRenderPage = function (page) { };
    ;
    MockActionService.prototype.saveToLocalStorage = function (key, value) { };
    ;
    MockActionService.prototype.getFromLocalStorage = function (key) { return ""; };
    ;
    return MockActionService;
}());
var myMockActionService = new MockActionService();
describe('Tests for Application', function () {
    var testApplication = new application_1.application();
    it('injectActionService() should store the injected ActionService', function () {
        testApplication.injectActionService(myMockActionService);
        expect(testApplication._actionService).toBe(myMockActionService);
    });
    testApplication.startAddingPages();
    it('startAddingPages() should add three objects into the apps pages array', function () {
        expect(testApplication.pages.length).toEqual(3);
    });
    describe("appCallBack() when called with", function () {
        it('page1button to call callYelpSearchAPI (in ActionService)', function () {
            spyOn(myMockActionService, "callYelpSearchAPI");
            testApplication.appCallback("test", "page1button", "searchTerm");
            expect(myMockActionService.callYelpSearchAPI).toHaveBeenCalled();
        });
        it('home to call getMatchedFunctino with the right arguments', function () {
            spyOn(testApplication, "getMatchedFunction");
            testApplication.getMatchedFunction("test", "home");
            expect(testApplication.getMatchedFunction).toHaveBeenCalledWith("test", "home");
        });
        it('mapButton to call getMatchedFunctino with the right arguments', function () {
            spyOn(testApplication, "getMatchedFunction");
            testApplication.getMatchedFunction("test", "mapButton");
            expect(testApplication.getMatchedFunction).toHaveBeenCalledWith("test", "mapButton");
        });
        it('backToResults to call getMatchedFunctino with the right arguments', function () {
            spyOn(testApplication, "getMatchedFunction");
            testApplication.getMatchedFunction("test", "backToResults");
            expect(testApplication.getMatchedFunction).toHaveBeenCalledWith("test", "backToResults");
        });
    });
    it('getMatchedFunction() should return the correct function', function () {
        var testFunc = testApplication.getMatchedFunction("page3Map", "backToResults");
        expect(testFunc).toEqual(testApplication.pages[2].callback[0].callbackFunction);
    });
    describe("tailorYelpResult() should", function () {
        var testString = testApplication.tailorYelpResult(undefined);
        var jsonOb = {};
        it('return the the error message when called with undefined', function () {
            expect(testString.indexOf("Sorry")).toBeGreaterThan(-1);
        });
        it('return the a string with appropriate contents if called with an empty json object', function () {
            testString = testApplication.tailorYelpResult(jsonOb);
            expect(testString.indexOf("Rating")).toBeGreaterThan(-1);
        });
        jsonOb = { "location": { "address": ["150 Stuart St"],
                "coordinate": { "latitude": -45.8744,
                    "longitude": 170.504
                }
            }
        };
        it('return a string with appropriate details when called with a populated json object', function () {
            testString = testApplication.tailorYelpResult(jsonOb);
            expect(testString.indexOf("150 Stuart St")).toBeGreaterThan(-1);
        });
        it('call googleMapsHelper with the coords if called with a json object containing them', function () {
            spyOn(testApplication, "googleMapsHelper");
            testString = testApplication.tailorYelpResult(jsonOb);
            expect(testApplication.googleMapsHelper).toHaveBeenCalledWith("-45.8744,170.504");
        });
    });
    it('googleMapsHelper() should return the correct string', function () {
        var coords = "45.00,45.00";
        var url = testApplication.googleMapsHelper(coords);
        expect(url.indexOf(coords)).toEqual(186);
        coords = "asdfasdf";
        url = testApplication.googleMapsHelper(coords);
        expect(url.indexOf(coords)).toEqual(186);
    });
});
//# sourceMappingURL=test.spec.js.map