"use strict";
var StateService = (function () {
    /**
     * Constructs the application
     * @method constructor
     * @param  {IApp}      app - retrieves required information
     * @return {[type]}        - returns the application information
     */
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
        var returnPage;
        for (var _i = 0, _a = this._app.pages; _i < _a.length; _i++) {
            var page = _a[_i];
            if (page.name === targetName) {
                returnPage = page;
                break;
            }
        }
        return returnPage;
    };
    StateService.prototype.getPage = function (name) {
        var returnPage;
        for (var _i = 0, _a = this._app.pages; _i < _a.length; _i++) {
            var page = _a[_i];
            if (page.name === name) {
                returnPage = page;
                break;
            }
        }
        return returnPage;
    };
    StateService.prototype.getPages = function () {
        return this._app.pages;
    };
    StateService.prototype.emulatorCentralCallBack = function (element, targetElementInfo) {
        var currentPageName = this.getStartPageName();
        if (targetElementInfo) {
            this._app.CentralCallbackFunc(currentPageName, element.name, targetElementInfo);
        }
        else {
            this._app.CentralCallbackFunc(currentPageName, element.name);
        }
    };
    StateService.prototype.getAppCallBack = function () {
        return this._app.CentralCallbackFunc;
    };
    return StateService;
}());
exports.StateService = StateService;
//# sourceMappingURL=StateService.js.map