"use strict";
var Category_ts_1 = require('../../../Emulator/TS/Services/Category.ts');
/**
 * The Viewmodel for the History page
 *
 * @export
 * @class HistoryViewModel
 */
var HistoryViewModel = (function () {
    /**
     * Creates an instance of HistoryViewModel.
     *
     * @param {IStorageService} storageService - checks storage of local data
     */
    function HistoryViewModel(storageService) {
        this._myStorage = storageService;
        if (this._myStorage.contain(Category_ts_1.Category.History.toString())) {
        }
        this._list = this.getHistoryList();
    }
    /**
     * Gets the history of listed items
     *
     * @returns {IListItem[]} - listed items in HistoryList
     */
    HistoryViewModel.prototype.getHistoryList = function () {
        return this._myStorage.get(Category_ts_1.Category.History.toString());
    };
    return HistoryViewModel;
}());
exports.HistoryViewModel = HistoryViewModel;
