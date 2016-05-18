"use strict";
var Category_1 = require('../../../Emulator/TS/Services/Category');
var FavouriteViewModel = (function () {
    function FavouriteViewModel(storageService) {
        this._myStorage = storageService;
        if (this._myStorage.contain(Category_1.Category.Favourite.toString())) {
        }
        this._list = this.getFavouriteList();
    }
    FavouriteViewModel.prototype.getFavouriteList = function () {
        return this._myStorage.get(Category_1.Category.Favourite.toString());
    };
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
