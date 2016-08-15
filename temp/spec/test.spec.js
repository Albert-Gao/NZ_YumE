"use strict";
var StateService_1 = require("../src/emulator/services/StateService");
it('true is true', function () { return expect(true).toEqual(true); });
describe('Tests for the StateService', function () {
    var MockPage = (function () {
        function MockPage() {
        }
        return MockPage;
    }());
    var page1 = new MockPage();
    page1.name = "page1";
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
        MockApp.prototype.injectActionService = function (as) { };
        ;
        MockApp.prototype.startAddingPages = function () { };
        ;
        MockApp.prototype.CentralCallbackFunc = function (pageName, elementID) { };
        ;
        return MockApp;
    }());
    var myMockApp = new MockApp();
    var testStateService = new StateService_1.StateService(myMockApp);
    it('getStartPageName() should return the specified string', function () {
        var startPageName = testStateService.getStartPageName();
        expect(startPageName).toEqual(pageName);
    });
    it('getStartPageName() should return a string', function () {
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
        var MockElement = (function () {
            function MockElement() {
            }
            return MockElement;
        }());
        var aMockElement = new MockElement();
        aMockElement.name = "testName";
        testStateService.emulatorCentralCallBack(aMockElement);
        expect(myMockApp.CentralCallbackFunc).toHaveBeenCalledWith("testName");
        testStateService.emulatorCentralCallBack(aMockElement, "test");
        expect(myMockApp.CentralCallbackFunc).toHaveBeenCalledWith("testName", "test");
    });
    it("getAppCallBack() should return the correct function", function () {
        var fn = testStateService.getAppCallBack();
        expect(fn("test", "Test")).toEqual(myMockApp.CentralCallbackFunc("test", "test"));
    });
});
//# sourceMappingURL=test.spec.js.map