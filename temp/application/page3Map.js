"use strict";
var page3Map = (function () {
    function page3Map() {
        this.defaultMap = "https://maps.googleapis.com/maps/api/staticmap?&size=300x230&maptype=roadmap" +
            "&visible=Octagon,Dunedin,NZ" +
            "&markers=color:yellow%7Clabel:U%7C-45.8743,170.5036" +
            "&key=AIzaSyDHTnM42xU_IGgOk0OGswZGOAtDRr8e66I";
        this.name = "page3Map";
        this.rawLayout = this.returnRawLayout();
        this.afterRenderLayout = null;
        this.callback = this.returnCallbackFuncs();
    }
    page3Map.prototype.returnRawLayout = function () {
        return [
            {
                type: "text",
                name: "page3placeholder",
                define: " "
            },
            {
                type: "button",
                name: "backToResults",
                define: "Back"
            },
            {
                type: "button",
                name: "home",
                define: "Search"
            },
            {
                type: "text",
                name: "page3placeholder",
                define: " "
            },
            {
                type: "image",
                name: "page3image",
                define: this.defaultMap
            }
        ];
    };
    page3Map.prototype.returnCallbackFuncs = function () {
        return [
            {
                bindToName: "backToResults",
                callbackFunction: this.goBackButtonCallBack
            },
            {
                bindToName: "home",
                callbackFunction: this.goHomeCallBack
            }
        ];
    };
    page3Map.prototype.goBackButtonCallBack = function (_actionService) {
        _actionService.goPage("page2list");
    };
    page3Map.prototype.goHomeCallBack = function (_actionService) {
        _actionService.goPage("page1search");
    };
    return page3Map;
}());
exports.page3Map = page3Map;
//# sourceMappingURL=page3Map.js.map