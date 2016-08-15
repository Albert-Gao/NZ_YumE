"use strict";
var page1search_1 = require("./page1search");
var application = (function () {
    function application() {
        this.title = "YumE";
        this.currentPageName = "";
        this.startPageName = "page1search";
        this.pages = [];
        this.CentralCallbackFunc = this.appCallback;
    }
    application.prototype.injectActionService = function (as) {
        this._actionService = as;
    };
    application.prototype.startAddingPages = function () {
        this.pages.push(new page1search_1.page1search());
    };
    application.prototype.createPageArray = function () {
    };
    application.prototype.appCallback = function (pageName, elementName, targetElementInfo) {
        console.log("I am here at application");
        console.log(targetElementInfo);
        switch (elementName) {
            case "page1button":
                var func = void 0;
                func = this.getMatchedFunction(pageName, elementName, targetElementInfo);
                func(this._actionService, targetElementInfo);
                break;
        }
    };
    application.prototype.getMatchedFunction = function (pageName, elementID, targetElementID) {
        var callback;
        var targetPage;
        for (var _i = 0, _a = this.pages; _i < _a.length; _i++) {
            var page = _a[_i];
            if (page.name === pageName) {
                targetPage = page;
                break;
            }
        }
        for (var _b = 0, _c = targetPage.callback; _b < _c.length; _b++) {
            var func = _c[_b];
            if (func.bindToName === elementID) {
                callback = func;
                break;
            }
        }
        return callback.callbackFunction;
    };
    return application;
}());
exports.application = application;
//# sourceMappingURL=application.js.map