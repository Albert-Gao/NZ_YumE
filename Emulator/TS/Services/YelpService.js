"use strict";
/**
 * This class retrive infomation from Yelp API using OAuth2 protocol.
 *
 * @export
 * @class YelpService
 */
var YelpService = (function () {
    function YelpService() {
    }
    /**
     * Create the identity that need to fetch the data.
     *
     * @returns {string} - The identity that generated.
     */
    YelpService.prototype.createIdentity = function () {
        var myID;
        myID = encodeURIComponent("oauth_consumer_key=") + encodeURIComponent("sNul62e6H0We5KJLGYP_Bw");
        myID += "&" + encodeURIComponent("oauth_token=") + encodeURIComponent("nguVll4te_e1oDcv2EkS4xKC6GOoQhcN");
        myID += "&" + encodeURIComponent("oauth_signature_method=") + encodeURIComponent("hmac-sha1");
        myID += "&" + encodeURIComponent("oauth_timestamp=") + encodeURIComponent(this.createTimestamp().toString());
        myID += "&" + encodeURIComponent(this.createNonce());
        return myID;
    };
    /**
     * Create the timestamp following the OAuth2 rule.
     *
     * @returns {number} - the actual timestamp that has been generated.
     */
    YelpService.prototype.createTimestamp = function () {
        return Math.round((new Date()).getTime() / 1000.0);
    };
    /**
     * Generate the random value that is used when creating the identity.
     *
     * @param {number} [length] - the length needs to generate.
     * @returns {string} -
     */
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
