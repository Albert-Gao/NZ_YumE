"use strict";
var Category_ts_1 = require('../../../Emulator/TS/Services/Category.ts');
/**
 * (description)
 *
 * @export
 * @class RecommendViewModel
 */
var RecommendViewModel = (function () {
    /**
     * Creates an instance of RecommendViewModel.
     *
     * @param {IStorageService} storageService (description)
     */
    function RecommendViewModel(storageService) {
        this._myStorage = storageService;
        if (this._myStorage.contain(Category_ts_1.Category.Recommend.toString())) {
        }
        this._list = this.getHistoryList();
    }
    /**
     * (description)
     *
     * @returns {IListItem[]} (description)
     */
    RecommendViewModel.prototype.getHistoryList = function () {
        //return this._myStorage.get(Category.Recommend.toString());
        var listItem = {
            address: "12 The Octagon Dunedin 9016",
            category: "Gastro Pubs",
            picURL: "http://s3-media4.fl.yelpcdn.com/bphoto/TB3tqX9-k2EejwYM4PQayw/o.jpg",
            title: "Mac’s Brewbar",
            url: "http://m.yelp.com/biz/macs-brewbar-dunedin"
        };
        var list = [listItem, listItem];
        this._list = list;
        return list;
    };
    return RecommendViewModel;
}());
exports.RecommendViewModel = RecommendViewModel;
