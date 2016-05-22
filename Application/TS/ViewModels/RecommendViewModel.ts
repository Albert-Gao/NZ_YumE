import {IListItem} from '../Models/IListItem'
import {IStorageService} from '../../../Emulator/TS/Services/IStorageService';
import {Category} from '../../../Emulator/TS/Services/Category';

/**
 * (description)
 * 
 * @export
 * @class RecommendViewModel
 */
export class RecommendViewModel{
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
     * Creates an instance of RecommendViewModel.
     * 
     * @param {IStorageService} storageService (description)
     */
    constructor(storageService:IStorageService){
        this._myStorage = storageService;
        if (this._myStorage.contain(Category.Recommend.toString())){
            
        }
        this._list = this.getHistoryList();
    }

    /**
     * (description)
     * 
     * @returns {IListItem[]} (description)
     */
    getHistoryList():IListItem[]{
        return this._myStorage.get(Category.Recommend.toString());
    }
    
}