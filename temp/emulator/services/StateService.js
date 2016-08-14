"use strict";
var StateService = (function () {
    function StateService(app) {
        this._app = app;
    }
    StateService.prototype.getStartPageName = function () {
        return this._app.startPageName;
    };
    StateService.prototype.getCurrentPageName = function () {
        return this._app.currentPageName;
    };
    StateService.prototype.setCurrentPageName = function (name) {
        this._app.currentPageName = name;
    };
    StateService.prototype.getCurrentPage = function () {
        var targetName = this._app.currentPageName;
        return _.find(this._app.pages, function (page) {
            page.name = targetName;
        });
    };
    StateService.prototype.getPage = function (name) {
        return _.find(this._app.pages, function (page) {
            page.name = name;
        });
    };
    StateService.prototype.getPages = function () {
        return this._app.pages;
    };
    StateService.prototype.emulatorCentralCallBack = function (element, targetElementInfo) {
        console.log("i am here");
        if (targetElementInfo) {
            this._app.CentralCallbackFunc(element.name, targetElementInfo);
        }
        else {
            this._app.CentralCallbackFunc(element.name);
        }
    };
    StateService.prototype.getAppCallBack = function () {
        return this._app.CentralCallbackFunc;
    };
    return StateService;
}());
exports.StateService = StateService;
//# sourceMappingURL=StateService.js.map