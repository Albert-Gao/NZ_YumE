"use strict";
var Category_1 = require('../../../Emulator/TS/Services/Category');
/**
* @class This model represents the restaurant favourites.
*/
var FavouriteViewModel = (function () {
    /**
     * Creates an instance of FavouriteViewModel.
     *
     * @param {IStorageService} storageService the injected Storage service.
     */
    function FavouriteViewModel(storageService) {
        this._myStorage = storageService;
        if (this._myStorage.contain(Category_1.Category.Favourite.toString())) {
        }
        this._list = this.getFavouriteList();
    }
    /**
     * Displays stored favourites
     *
     * @returns {IRestaurant[]} return the detail of the restaurant as a object.
     */
    FavouriteViewModel.prototype.getFavouriteList = function () {
        return this._myStorage.get(Category_1.Category.Favourite.toString());
    };
    /**
     * Removes string from array.
     * @param {string} address use the address as a keyword to find the data need to delete.
     */
    FavouriteViewModel.prototype.remove = function (address) {
        var myList = this._list;
        for (var i in myList) {
            if (myList[i].address === address) {
                myList.splice(+i, 1);
            }
        }
        this._list = myList;
        this._myStorage.save(Category_1.Category.Favourite.toString(), myList);
    };
    return FavouriteViewModel;
}());
exports.FavouriteViewModel = FavouriteViewModel;
