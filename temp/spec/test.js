"use strict";
var StateService_1 = require("../src/emulator/services/StateService");
it('true is true', function () { return expect(true).toEqual(true); });
describe('Tests for the StateService', function () {
    it('getStartPageName() should return a string', function () {
        var checkThisValue = "This Page";
        var mockApp = (function () {
            function mockApp() {
                this.currentPageName = checkThisValue;
            }
            return mockApp;
        }());
        var testStateService = new StateService_1.StateService(new mockApp());
        var startPageName = testStateService.getStartPageName();
        expect(startPageName).toEqual(checkThisValue);
    });
});
//# sourceMappingURL=test.js.map