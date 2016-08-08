"use strict";
var ActionService_1 = require("../../emulator/services/ActionService");
var StateService_1 = require("../../emulator/services/StateService");
var SystemService_1 = require("../../emulator/services/SystemService");
var TemplatingService_1 = require("../../emulator/services/TemplatingService");
var application_1 = require("../../application/application");
var emulator = (function () {
    function emulator() {
        this._app = new application_1.application();
        this._stateService = new StateService_1.StateService(this._app);
        this._templatingService = new TemplatingService_1.TemplatingService(this._stateService);
        this._systemService = new SystemService_1.SystemService(this._templatingService, this._stateService);
        this._actionService = new ActionService_1.ActionService(this._systemService);
    }
    return emulator;
}());
exports.emulator = emulator;
//# sourceMappingURL=emulator.js.map