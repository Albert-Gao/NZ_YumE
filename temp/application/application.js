"use strict";
var application = (function () {
    function application(title, currentPageName, pages, CentralCallbackFunc) {
        this.title = title;
        this.currentPageName = currentPageName;
        this.pages = pages;
        this.CentralCallbackFunc = CentralCallbackFunc;
    }
    return application;
}());
exports.application = application;
//# sourceMappingURL=application.js.map