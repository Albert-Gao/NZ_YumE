"use strict";
/**
 * (description)
 *
 * @export
 * @class MyLocalStorage
 */
var StorageService = (function () {
    /**
     * Creates an instance of MyLocalStorage.
     *
     * @param {string} theKey (description)
     * @param {*} theValue (description)
     */
    function StorageService(theKey, theValue) {
        if (theKey) {
            this.key = theKey;
        }
        if (theValue) {
            this.value = theValue;
        }
    }
    /**
     * (description)
     *
     * @param {string} [theKey] (description)
     * @param {*} [theValue] (description)
     */
    StorageService.prototype.save = function (theKey, theValue) {
        var myKey;
        var myValue;
        if (theKey) {
            myKey = theKey;
        }
        else {
            myKey = this.key.toString();
        }
        if (theValue) {
            myValue = theValue;
        }
        else {
            myValue = this.value;
        }
        localStorage.setItem(myKey, myValue);
    };
    /**
     * (description)
     *
     * @param {string} [theKey] (description)
     * @returns {*} (description)
     */
    StorageService.prototype.get = function (theKey) {
        var myKey;
        if (theKey) {
            myKey = theKey;
        }
        else {
            myKey = this.key.toString();
        }
        if (localStorage.getItem(myKey) != null) {
            return localStorage.getItem(myKey);
        }
    };
    /**
     * (description)
     *
     * @param {string} [theKey] (description)
     */
    StorageService.prototype.remove = function (theKey) {
        var myKey;
        if (theKey) {
            myKey = theKey;
        }
        else {
            myKey = this.key.toString();
        }
        if (localStorage.getItem(myKey) != null) {
            localStorage.removeItem(myKey);
        }
    };
    /**
     * (description)
     *
     * @param {string} [theKey] (description)
     * @returns {boolean} (description)
     */
    StorageService.prototype.contain = function (theKey) {
        var myKey;
        if (theKey) {
            myKey = theKey.toString();
        }
        else {
            myKey = this.key.toString();
        }
        if (localStorage.getItem(myKey) === null) {
            return false;
        }
        else {
            return true;
        }
    };
    return StorageService;
}());
exports.StorageService = StorageService;
