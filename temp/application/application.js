"use strict";
var page1search_1 = require("./page1search");
var page2list_1 = require("./page2list");
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
        this.pages.push(new page2list_1.page2list());
    };
    application.prototype.createPageArray = function () {
    };
    application.prototype.appCallback = function (pageName, elementName, targetElementInfo) {
        var _this = this;
        switch (elementName) {
            case "page1button":
                var func_1;
                if (targetElementInfo) {
                    this._actionService.callYelpSearchAPI(targetElementInfo, function (json) {
                        var list = _this.tailorYelpResult(json);
                        for (var _i = 0, _a = _this.pages; _i < _a.length; _i++) {
                            var page = _a[_i];
                            if (page.name === 'page2list') {
                                for (var _b = 0, _c = page.rawLayout; _b < _c.length; _b++) {
                                    var e = _c[_b];
                                    if (e.type === 'text' && e.name === 'page2text') {
                                        e.define = list;
                                    }
                                    else if (e.type === 'image') {
                                        if (typeof json != 'undefined') {
                                            e.define = json.snippet_image_url;
                                        }
                                    }
                                }
                                _this._actionService.reRenderPage(page);
                                break;
                            }
                        }
                        func_1 = _this.getMatchedFunction(pageName, elementName, targetElementInfo);
                        func_1(_this._actionService, targetElementInfo);
                    });
                }
                else {
                    this.getMatchedFunction(pageName, elementName)(this._actionService);
                }
                break;
            case "page2button":
                this.pages[1].callback[0].callbackFunction(this._actionService);
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
    application.prototype.tailorYelpResult = function (json) {
        console.log(json);
        var define;
        if (json) {
            var _item = json;
            var title = _item.name ? _item.name : "";
            var phone = _item.phone ? _item.phone : "";
            var rating = _item.rating ? _item.rating : "";
            var category = _item.categories ? _item.categories[0][0] : "";
            var comment = _item.snippet_text ? _item.snippet_text : "";
            define = '<br/><br/>' + 'Title: ' + title + '<br/><br/>' + 'Phone: ' + phone + '<br/><br/>' + 'Rating: ' + rating + '<br/><br/>' + 'Category: ' + category + '<br/><br/>' + 'Comment: ' + comment + '<br/><br/>';
        }
        else {
            define = '<br/><br/>' + "sorry, Yelp consider your keyword as invalid, please go back and try again.";
        }
        return define;
    };
    return application;
}());
exports.application = application;
//# sourceMappingURL=application.js.map