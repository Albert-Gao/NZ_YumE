/**
* This model represents the history of interactions.
* It will be used to store the latest accessed feature. 
*/
import {IListItem} from '../Models/IListItem'
import {IStorageService} from '../../../Emulator/TS/Services/IStorageService';
import {Category} from '../../../Emulator/TS/Services/Category';
/**
* @export
* @class represents an item that was viewed
* 
*/
export class HistoryViewModel{
    _myStorage:IStorageService;
    _list:IListItem[];
  /**
  * @constructor - stores data locally that matches recent searches
  * @this {function} - represents current storage of items
  * @return {string} - returns list of history
  */
    constructor(storageService:IStorageService){
        this._myStorage = storageService;
        if (this._myStorage.contain(Category.History.toString())){
            
        }
        this._list = this.getHistoryList();
    }
   /**
* @function - gets the history searched items
* 
* @return {string} - returns matching data
*/
    getHistoryList():IListItem[]{
        return this._myStorage.get(Category.History.toString());
    }
    
}