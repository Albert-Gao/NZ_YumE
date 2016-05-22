import {IListItem} from '../Models/IListItem'
import {IStorageService} from '../../../Emulator/TS/Services/IStorageService';
import {Category} from '../../../Emulator/TS/Services/Category';

/**
 * (description)
 * 
 * @export
 * @class HistoryViewModel
 */
export class HistoryViewModel{
    /**
     * (description)
     * 
     * @type {IStorageService}
     */
    _myStorage:IStorageService;
    /**
     * (description)
     * 
     * @type {IListItem[]}
     */
    _list:IListItem[];

    /**
     * Creates an instance of HistoryViewModel.
     * 
     * @param {IStorageService} storageService (description)
     */
    constructor(storageService:IStorageService){
        this._myStorage = storageService;
        if (this._myStorage.contain(Category.History.toString())){
            
        }
        this._list = this.getHistoryList();
    }

    /**
     * (description)
     * 
     * @returns {IListItem[]} (description)
     */
    getHistoryList():IListItem[]{
        return this._myStorage.get(Category.History.toString());
    }
    
}