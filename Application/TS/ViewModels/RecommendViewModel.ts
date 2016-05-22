/**
* This model represents the recommended restaurants.
* It will be used to show listed items that are relavent to location. 
*/
import {IListItem} from '../Models/IListItem'
import {IStorageService} from '../../../Emulator/TS/Services/IStorageService';
import {Category} from '../../../Emulator/TS/Services/Category';
/**
* @export
* @class represents an item that is recommended
* 
*/
export class RecommendViewModel{
    _myStorage:IStorageService;
    _list:IListItem[];
  /**
* @constructor - matches speech and string
* @param {array} - matches storage to string
* @this {string} - value equals storage
* @this {string} - list is saved to history
*/
    constructor(storageService:IStorageService){
        this._myStorage = storageService;
        if (this._myStorage.contain(Category.Recommend.toString())){
            
        }
        this._list = this.getHistoryList();
    }
      /**
* @function - gets the history searched items
* 
* @return {string} - returns matching data
*/
    getHistoryList():IListItem[]{
        return this._myStorage.get(Category.Recommend.toString());
    }
    
}