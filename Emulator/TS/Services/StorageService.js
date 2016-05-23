"use strict";
/**
 * Allows for storage of data
 *
 * @export
 * @class MyLocalStorage
 */
var StorageService = (function () {
    /**
     * Creates an instance of MyLocalStorage.
     *
     * @param {string} theKey (this.key)
     * @param {*} theValue (this.value)
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
     * Stores the key that corresponds with assigned value
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
     * Gets the string that corresponds with assigned key
     *
     * @param {string} theKey (this.key)
     * @returns {*} (myKey)
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
     * Removes the string that corresponds with assigned key
     *
     * @param {string} [theKey] (this.key)
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
     * Boolean value to check if key is equal to string
     *
     * @param {string} [theKey] (this.key)
     * @returns {boolean} (this.key)
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
