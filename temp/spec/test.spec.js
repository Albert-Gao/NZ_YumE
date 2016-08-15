"use strict";
var StateService_1 = require("../src/emulator/services/StateService");
var _ = require('../../dist/assets/lodash.js');
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
    var testStateService = new StateService_1.StateService(new MockApp());
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
    });
    it("getCurrentPage() should return an IPage object of the current page", function () {
        var currentPage = testStateService.getCurrentPage();
        expect(currentPage.name).toEqual("page1");
    });
});
//# sourceMappingURL=test.spec.js.map