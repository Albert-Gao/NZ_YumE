"use strict";
var application = (function () {
    function application() {
    }
    application.getInstance = function () {
        return null;
    };
    return application;
}());
exports.application = application;
var Handler = (function () {
    function Handler(msgs) {
        this.msgs = msgs;
    }
    Handler.prototype.greet = function () {
        this.msgs.forEach(function (x) { return alert(x); });
    };
    return Handler;
}());
function createHandler(handler, params) {
    var obj = new handler(params);
    return obj;
}
var h = createHandler(Handler, ['h111i', 'b1ye']);
h.greet();
//# sourceMappingURL=application.js.map