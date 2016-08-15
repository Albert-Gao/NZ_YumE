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
                name: "page2placeholder1",
                define: "  "
            },
            {
                type: "text",
                name: "page2placeholder2",
                define: "  "
            },
            {
                type: "button",
                name: "page2button",
                define: "go back"
            },
            {
                type: "text",
                name: "page2placeholder3",
                define: "  "
            },
            {
                type: "text",
                name: "page2placeholder4",
                define: "   "
            },
            {
                type: "image",
                name: "page2image",
                define: "http://s3-media1.fl.yelpcdn.com/photo/_87c-Gu1rjTbPtwHd90vDA/ms.jpg"
            },
            {
                type: "text",
                name: "page2text",
                define: "I really love it"
            }
        ];
    };
    page2list.prototype.returnCallbackFuncs = function () {
        return [
            {
                bindToName: "page2button",
                callbackFunction: this.goBackButtonCallBack
            }
        ];
    };
    page2list.prototype.goBackButtonCallBack = function (_actionService) {
        _actionService.goPage("page1search");
    };
    return page2list;
}());
exports.page2list = page2list;
//# sourceMappingURL=page2list.js.map