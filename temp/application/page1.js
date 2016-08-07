"use strict";
var page1 = (function () {
    function page1(as) {
        this.name = "page1search";
        this.rawLayout = this.returnRawLayout();
        this.afterRenderLayout = null;
        this.callback = this.returnCallbackFuncs();
        this._actionService = as;
    }
    page1.prototype.returnRawLayout = function () {
        return [
            {
                type: "image",
                name: "page1image",
                define: "./images/YuMe_logo.jpg"
            },
            {
                type: "text",
                name: "page1text",
                define: "Search your favourite, eat your favourite :)"
            },
            {
                type: "input",
                name: "page1input",
                define: "Enter the name"
            },
            {
                type: "button",
                name: "page1button",
                targetElementID: "page1text",
                define: "YumE it!"
            },
            {
                type: "button",
                name: "page1jumpbutton",
                define: "YumE it!"
            },
        ];
    };
    page1.prototype.returnCallbackFuncs = function () {
        return [
            {
                bindToName: "page1button",
                targetID: "page1text",
                callbackFunction: this.searchButtonCallBack
            },
            {
                bindToName: "page1jumpbutton",
                callbackFunction: this.jumpButtonCallBack
            }
        ];
    };
    page1.prototype.searchButtonCallBack = function (info) {
        if (info) {
            this._actionService.goPage("page2list");
        }
        else {
            this._actionService.showNotification("Please enter the name of restaurant.");
        }
    };
    page1.prototype.jumpButtonCallBack = function () {
        this._actionService.goPage("page4fav");
    };
    return page1;
}());
exports.page1 = page1;
//# sourceMappingURL=page1.js.map