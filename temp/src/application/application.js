"use strict";
var page1search_1 = require("./page1search");
var page2list_1 = require("./page2list");
var page3Map_1 = require("./page3Map");
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
        this.pages.push(new page3Map_1.page3Map());
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
                                        if (typeof json !== 'undefined') {
                                            if (typeof json.image_url !== 'undefined') {
                                                e.define = json.image_url;
                                            }
                                            else {
                                                e.define = "assets/food.png";
                                            }
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
            case "home":
                this.pages[1].callback[0].callbackFunction(this._actionService);
                break;
            case "mapButton":
                this._actionService.reRenderPage(this.pages[2]);
                this.pages[1].callback[1].callbackFunction(this._actionService);
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
            var address = _item.location.address[0] ? _item.location.address[0] : "";
            var latitude = _item.location.coordinate.latitude ? _item.location.coordinate.latitude : 0;
            var longitude = _item.location.coordinate.longitude ? _item.location.coordinate.longitude : 0;
            for (var _i = 0, _a = this.pages[2].rawLayout; _i < _a.length; _i++) {
                var e = _a[_i];
                if (e.type === 'image') {
                    var address_1 = "" + latitude + "," + longitude;
                    e.define = this.googleMapsHelper(address_1);
                    break;
                }
            }
            define = '<br/>' + '<strong>Title: \</strong>' + title + '<br/>' + '<strong>Phone: \</strong>'
                + phone + '   |  ' + '<strong\>Address: \</strong>' + address
                + '<br/>' + '<strong>Rating: \</strong>' + rating
                + '   |  ' + '<strong>Category: \</strong>' + category
                + '<br/>' + '<strong>Comment: \</strong>' + comment;
        }
        else {
            define = '<br/>' + "Sorry, Yelp can't recognize your keyword, please go back and search again.";
            this.pages[1] = new page2list_1.page2list();
        }
        return define;
    };
    application.prototype.googleMapsHelper = function (address) {
        var mapURL = "https://maps.googleapis.com/maps/api/staticmap?&size=300x230&maptype=roadmap" +
            "&visible=Octagon,Dunedin,NZ" +
            "&markers=color:yellow%7Clabel:U%7C-45.8743,170.5036" +
            "&markers=color:blue%7Clabel:F%7C";
        var apiKey = "&key=AIzaSyDHTnM42xU_IGgOk0OGswZGOAtDRr8e66I";
        return mapURL + address + apiKey;
    };
    return application;
}());
exports.application = application;
//# sourceMappingURL=application.js.map