"use strict";
var page1search = (function () {
    function page1search() {
        this.name = "page1search";
        this.rawLayout = this.returnRawLayout();
        this.afterRenderLayout = null;
        this.callback = this.returnCallbackFuncs();
    }
    page1search.prototype.returnRawLayout = function () {
        return [
            {
                type: "image",
                name: "page1image",
                define: "./assets/YuMe_logo.jpg"
            },
            {
                type: "text",
                name: "page1text",
                define: "Search better, eat fatter :)"
            },
            {
                type: "input",
                name: "page1input",
                define: "Enter the name"
            },
            {
                type: "button",
                name: "page1button",
                targetElementID: "page1input",
                define: "YumE it!"
            },
            {
                type: "text",
                name: "page1text1",
                define: " "
            },
            {
                type: "text",
                name: "page1text2",
                define: "Try these Dunedin local best:<br/><br/> Mac’s Brewbar / Paasha Turkish Cafe / Etrusco at The Savoy / The Good Oil / Cadbury World / Miga / Hikari Sushi Bar / Velvet Burger"
            }
        ];
    };
    page1search.prototype.returnCallbackFuncs = function () {
        return [
            {
                bindToName: "page1button",
                targetID: "page1text",
                callbackFunction: this.searchButtonCallBack
            }
        ];
    };
    page1search.prototype.searchButtonCallBack = function (_actionService, info) {
        if (info && info != "") {
            _actionService.goPage("page2list");
        }
        else {
            _actionService.showNotification("Please enter the name of restaurant.");
        }
    };
    return page1search;
}());
exports.page1search = page1search;
//# sourceMappingURL=page1search.js.map