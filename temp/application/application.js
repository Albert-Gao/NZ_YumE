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
        var func;
        switch (elementName) {
            case "page1button":
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
                                                e.define = json.image_url; //better image
                                            }
                                            else {
                                                //set default image only if valid json, but no image
                                                e.define = "assets/food.png";
                                            }
                                        }
                                    }
                                }
                                _this._actionService.reRenderPage(page);
                                break;
                            }
                        }
                        func = _this.getMatchedFunction(pageName, elementName, targetElementInfo);
                        func(_this._actionService, targetElementInfo);
                    });
                }
                else {
                    this.getMatchedFunction(pageName, elementName)(this._actionService);
                }
                break;
            case "home":
                func = this.getMatchedFunction("page2list", elementName);
                func(this._actionService);
                break;
            case "mapButton":
                this._actionService.reRenderPage(this.pages[2]);
                func = this.getMatchedFunction("page2list", elementName);
                func(this._actionService);
                break;
            case "backToResults":
                func = this.getMatchedFunction("page3Map", elementName);
                func(this._actionService);
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
        var define;
        //Yelp API suck even for v2 version.
        if (json) {
            var _item = json;
            //Need this weird coding, to cover yelp's bad non-consistent API design.
            var title = _item.name ? _item.name : "";
            var phone = _item.phone ? _item.phone : "";
            var rating = _item.rating ? _item.rating : "";
            var category = _item.categories ? _item.categories[0][0] : "";
            var comment = _item.snippet_text ? _item.snippet_text : "";
            var address = void 0;
            var lat = void 0;
            var long = void 0;
            if (_item.location) {
                address = _item.location.address ? _item.location.address[0] : "";
                if (_item.location.coordinate) {
                    lat = _item.location.coordinate.latitude;
                    long = _item.location.coordinate.longitude;
                }
                else {
                    lat = long = 0;
                }
            }
            else {
                address = "";
                lat = long = 0;
            }
            for (var _i = 0, _a = this.pages[2].rawLayout; _i < _a.length; _i++) {
                var e = _a[_i];
                if (e.type === 'image') {
                    var coords = "" + lat + "," + long;
                    e.define = this.googleMapsHelper(coords);
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
            //so that sad image returns if successful then failed search
            this.pages[1].rawLayout[3].define = "./assets/cry.png";
        }
        return define;
    };
    application.prototype.googleMapsHelper = function (coords) {
        var mapURL = "https://maps.googleapis.com/maps/api/staticmap?&size=300x230&maptype=roadmap" +
            "&visible=Octagon,Dunedin,NZ" +
            "&markers=color:yellow%7Clabel:U%7C-45.8743,170.5036" +
            "&markers=color:blue%7Clabel:F%7C";
        var apiKey = "&key=AIzaSyDHTnM42xU_IGgOk0OGswZGOAtDRr8e66I";
        return mapURL + coords + apiKey;
    };
    return application;
}());
exports.application = application;
//# sourceMappingURL=application.js.map