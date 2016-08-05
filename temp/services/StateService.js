"use strict";
var StateService = (function () {
    function StateService(app) {
        this._app = app;
    }
    StateService.prototype.getCurrentPage = function () {
        return null;
    };
    StateService.prototype.getPage = function (name) {
        return null;
    };
    StateService.prototype.getPageCallbacks = function (pageName) {
        return null;
    };
    StateService.prototype.getPageCallback = function (pageName, elementID) {
        return null;
    };
    return StateService;
}());
exports.StateService = StateService;
//# sourceMappingURL=StateService.js.map