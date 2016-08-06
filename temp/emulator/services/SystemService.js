"use strict";
var SystemService = (function () {
    function SystemService(app) {
        this._app = app;
    }
    SystemService.prototype.removeCurrentPage = function () {
        $(".container-fluid").remove();
    };
    SystemService.prototype.goPage = function (name) {
        this.removeCurrentPage();
        var page = _.find(this._app.pages, function (page) {
            page.name = name;
        });
        $(".emulator").append(page.afterRenderLayout);
        this.renewCurrentPage(page.name);
    };
    SystemService.prototype.renewCurrentPage = function (name) {
        this._app.currentPage = name;
    };
    SystemService.prototype.showSplashScreen = function () {
        var backgroundDIV = $(document.createElement("div"));
        backgroundDIV.addClass("splashScreen");
        $(".emulator").append(backgroundDIV);
        backgroundDIV.fadeIn('slow', function () {
            var brand = $(document.createElement("p"));
            brand.addClass('brand').text('Smartisan');
            backgroundDIV.append(brand);
            brand.slideDown('slow').fadeOut('slow').fadeIn('slow');
        });
    };
    SystemService.prototype.hideSplashScreen = function () {
        $(".splashScreen").fadeOut('slow').remove();
    };
    SystemService.prototype.showErrorScreen = function () {
    };
    return SystemService;
}());
exports.SystemService = SystemService;
//# sourceMappingURL=SystemService.js.map