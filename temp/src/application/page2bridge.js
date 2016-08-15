"use strict";
var page2list = (function () {
    function page2list(as) {
        this.name = "page2list";
        this.rawLayout = this.returnRawLayout();
        this.afterRenderLayout = null;
        this.callback = this.returnCallbackFuncs();
        this._actionService = as;
    }
    page2list.prototype.returnRawLayout = function () {
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
    page2list.prototype.returnCallbackFuncs = function () {
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
    page2list.prototype.searchButtonCallBack = function (info) {
        if (info) {
            this._actionService.goPage("page2list");
        }
        else {
            this._actionService.showNotification("Please enter the name of restaurant.");
        }
    };
    page2list.prototype.jumpButtonCallBack = function () {
        this._actionService.goPage("page4fav");
    };
    return page2list;
}());
exports.page2list = page2list;
//# sourceMappingURL=page2bridge.js.map