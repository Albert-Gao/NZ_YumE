"use strict";
var YelpService = (function () {
    function YelpService() {
    }
    YelpService.prototype.createIdentity = function () {
        var myID;
        myID = encodeURIComponent("oauth_consumer_key=") + encodeURIComponent("sNul62e6H0We5KJLGYP_Bw");
        myID += "&" + encodeURIComponent("oauth_token=") + encodeURIComponent("nguVll4te_e1oDcv2EkS4xKC6GOoQhcN");
        myID += "&" + encodeURIComponent("oauth_signature_method=") + encodeURIComponent("hmac-sha1");
        myID += "&" + encodeURIComponent("oauth_timestamp=") + encodeURIComponent(this.createTimestamp().toString());
        myID += "&" + encodeURIComponent(this.createNonce());
        return myID;
    };
    YelpService.prototype.createTimestamp = function () {
        return Math.round((new Date()).getTime() / 1000.0);
    };
    YelpService.prototype.createNonce = function (length) {
        var last;
        var repeat = 0;
        var myLength;
        if (length) {
            myLength = length;
        }
        else {
            length = 15;
        }
        var now = Math.pow(10, 2) * +new Date();
        if (now == last) {
            repeat++;
        }
        else {
            repeat = 0;
            last = now;
        }
        var s = (now + repeat).toString();
        return s.substr(s.length - length);
    };
    return YelpService;
}());
exports.YelpService = YelpService;
