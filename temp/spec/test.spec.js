"use strict";
var StateService_1 = require("../src/emulator/services/StateService");
it('true is true', function () { return expect(true).toEqual(true); });
describe('Tests for the StateService', function () {
    it('getStartPageName() should return a string', function () {
        var checkThisValue = "This Page";
        var MockApp = (function () {
            function MockApp() {
                this.title = "";
                this.currentPageName = checkThisValue;
                this.startPageName = checkThisValue;
            }
            MockApp.prototype.injectActionService = function (as) { };
            ;
            MockApp.prototype.startAddingPages = function () { };
            ;
            MockApp.prototype.CentralCallbackFunc = function (pageName, elementID) {
                return "";
            };
            return MockApp;
        }());
        var testStateService = new StateService_1.StateService(new MockApp());
        var startPageName = testStateService.getStartPageName();
        expect(startPageName).toEqual(checkThisValue);
    });
});
//# sourceMappingURL=test.spec.js.map