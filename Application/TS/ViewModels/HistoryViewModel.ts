import {IListItem} from '../Models/IListItem.ts'
import {IStorageService} from '../../../Emulator/TS/Services/IStorageService.ts';
import {Category} from '../../../Emulator/TS/Services/Category.ts';

/**
 * The Viewmodel for the History page
 *
 * @export
 * @class HistoryViewModel
 */
export class HistoryViewModel{
    /**
     * Creates a list to store myStorage
     *
     * @type {IStorageService}
     */
    _myStorage:IStorageService;
    /**
     * Creates a list to store listed items
     *
     * @type {IListItem[]}
     */
    _list:IListItem[];

    /**
     * Creates an instance of HistoryViewModel.
     *
     * @param {IStorageService} storageService - checks storage of local data
     */
    constructor(storageService:IStorageService){
        this._myStorage = storageService;
        if (this._myStorage.contain(Category.History.toString())){
            
        }
        this._list = this.getHistoryList();
    }

    /**
     * Gets the history of listed items
     *
     * @returns {IListItem[]} - listed items in HistoryList
     */
    getHistoryList():IListItem[]{
        return this._myStorage.get(Category.History.toString());
    }
    
}
