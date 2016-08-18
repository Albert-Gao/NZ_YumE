"use strict";
var page2list = (function () {
    function page2list() {
        this.name = "page2list";
        this.rawLayout = this.returnRawLayout();
        this.afterRenderLayout = null;
        this.callback = this.returnCallbackFuncs();
    }
    page2list.prototype.returnRawLayout = function () {
        return [
            {
                type: "text",
                name: "page2placeholder",
                define: " "
            },
            {
                type: "button",
                name: "home",
                define: "Back"
            },
            {
                type: "text",
                name: "page2placeholder",
                define: " "
            },
            {
                type: "image",
                name: "page2image",
                define: "./assets/cry.png"
            },
            {
                type: "text",
                name: "page2text",
                define: "I really love it"
            },
            {
                type: "button",
                name: "mapButton",
                define: "Map"
            }
        ];
    };
    page2list.prototype.returnCallbackFuncs = function () {
        return [
            {
                bindToName: "home",
                callbackFunction: this.goBackButtonCallBack
            },
            {
                bindToName: "mapButton",
                callbackFunction: this.goMapCallBack
            }
        ];
    };
    page2list.prototype.goBackButtonCallBack = function (_actionService) {
        _actionService.goPage("page1search");
    };
    page2list.prototype.goMapCallBack = function (_actionService) {
        _actionService.goPage("page3Map");
    };
    return page2list;
}());
exports.page2list = page2list;
//# sourceMappingURL=page2list.js.map