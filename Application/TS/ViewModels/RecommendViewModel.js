"use strict";
var Category_1 = require('../../../Emulator/TS/Services/Category');
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
        if (this._myStorage.contain(Category_1.Category.Recommend.toString())) {
        }
        this._list = this.getHistoryList();
    }
    /**
     * (description)
     *
     * @returns {IListItem[]} (description)
     */
    RecommendViewModel.prototype.getHistoryList = function () {
        return this._myStorage.get(Category_1.Category.Recommend.toString());
    };
    return RecommendViewModel;
}());
exports.RecommendViewModel = RecommendViewModel;
