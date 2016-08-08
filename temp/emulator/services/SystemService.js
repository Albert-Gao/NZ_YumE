"use strict";
var SystemService = (function () {
    function SystemService(templatingService, stateService) {
        this._templatingService = templatingService;
        this._stateService = stateService;
    }
    SystemService.prototype.removeCurrentPageFromScreen = function () {
        this._templatingService.removeElementFromDOM(".container-fluid");
    };
    SystemService.prototype.goPage = function (name) {
        this.removeCurrentPageFromScreen();
        var page = _.find(this._stateService.getPages(), function (page) {
            page.name = name;
        });
        $(".emulator").append(page.afterRenderLayout);
        this.renewCurrentPage(page.name);
    };
    SystemService.prototype.renewCurrentPage = function (name) {
        this._stateService.setCurrentPageName(name);
    };
    SystemService.prototype.showSplashScreen = function () {
        var backgroundDIV = this._templatingService.createjQueryItem("div", undefined, "splashScreen");
        var brand = this._templatingService.createjQueryItem("p", undefined, "brand", "Smartisan");
        $(".emulator").append(backgroundDIV);
        backgroundDIV.append(brand);
        backgroundDIV.fadeIn('slow', function () {
            brand.fadeIn('slow').fadeOut('slow').fadeIn('slow');
        });
    };
    SystemService.prototype.hideSplashScreen = function () {
        $(".splashScreen").fadeOut('slow').remove();
    };
    SystemService.prototype.showNotification = function (text) {
        var noticeDIV = this._templatingService.createjQueryItem("div", undefined, "bg-danger", text);
        $(".emulator").prepend(noticeDIV);
        setTimeout(function () {
            noticeDIV.fadeOut('slow').remove();
        }, 2000);
    };
    return SystemService;
}());
exports.SystemService = SystemService;
//# sourceMappingURL=SystemService.js.map