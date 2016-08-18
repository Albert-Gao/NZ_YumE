"use strict";
var SystemService = (function () {
    /**
     * Constructs the template and services
     * @method constructor
     * @param  {ITemplatingService} templatingService - provides the template
     * @param  {IStateService}      stateService      - provides service state
     * @return {[type]}                               - returns system service
     */
    function SystemService(templatingService, stateService) {
        this._templatingService = templatingService;
        this._stateService = stateService;
    }
    SystemService.prototype.removeCurrentPageFromScreen = function () {
        this._templatingService.removeElementFromDOM(".container-fluid");
    };
    SystemService.prototype.goPage = function (name) {
        this.removeCurrentPageFromScreen();
        for (var _i = 0, _a = this._stateService.getPages(); _i < _a.length; _i++) {
            var page = _a[_i];
            if (page.name === name) {
                $(".emulator").prepend(page.afterRenderLayout);
                this.renewCurrentPage(page.name);
            }
        }
    };
    SystemService.prototype.renderAllPages = function (page) {
        if (page) {
            var page1 = this._templatingService.createPage(page);
            this._stateService.getPage(page.name).afterRenderLayout = page1;
        }
        else {
            this._templatingService.createPagesAndSave();
        }
    };
    SystemService.prototype.goStartPage = function () {
        this.goPage(this._stateService.getStartPageName());
    };
    SystemService.prototype.renewCurrentPage = function (name) {
        this._stateService.setCurrentPageName(name);
    };
    SystemService.prototype.startEmulator = function () {
        var _this = this;
        var backgroundDIV = this._templatingService.createjQueryItem("div", undefined, "splashScreen");
        var brand = this._templatingService.createjQueryItem("p", undefined, "brand", "Smartisan");
        $(".emulator").append(backgroundDIV);
        backgroundDIV.append(brand);
        backgroundDIV.fadeIn('slow', function () {
            brand.fadeIn('slow')
                .fadeOut('slow')
                .fadeIn('slow', function () {
                _this.hideSplashScreen();
                _this.renderAllPages();
                _this.goStartPage();
            });
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