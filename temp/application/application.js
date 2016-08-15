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
        this.pages.push(new page1search_1.page1search(this._actionService));
    };
    application.prototype.createPageArray = function () {
    };
    application.prototype.appCallback = function (elementName, targetElementInfo) {
        console.log("I am here at application");
    };
    return application;
}());
exports.application = application;
//# sourceMappingURL=application.js.map