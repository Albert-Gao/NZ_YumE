"use strict";
var ActionService = (function () {
    function ActionService(systemService) {
        this._systemService = systemService;
    }
    ActionService.prototype.goPage = function (name) {
        this._systemService.goPage(name);
    };
    ActionService.prototype.showNotification = function (words) {
        this._systemService.showNotification(words);
    };
    ActionService.prototype.saveToLocalStorage = function (key, value) {
        localStorage.setItem(key, value);
    };
    ActionService.prototype.getFromLocalStorage = function (key) {
        return localStorage.getItem(key);
    };
    return ActionService;
}());
exports.ActionService = ActionService;
//# sourceMappingURL=ActionService.js.map