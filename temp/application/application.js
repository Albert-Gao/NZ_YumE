"use strict";
var application = (function () {
    function application() {
        this.title = "YumE";
        this.currentPageName = "";
        this.pages = null;
        this.CentralCallbackFunc = this.appCallback;
    }
    application.prototype.appCallback = function (pageName, elementID) {
    };
    return application;
}());
exports.application = application;
//# sourceMappingURL=application.js.map