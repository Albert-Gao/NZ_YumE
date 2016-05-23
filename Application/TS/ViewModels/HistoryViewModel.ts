/**
* This model represents the history of interactions.
* It will be used to store the latest accessed feature. 
*/
import {IListItem} from '../Models/IListItem'
import {IStorageService} from '../../../Emulator/TS/Services/IStorageService';
import {Category} from '../../../Emulator/TS/Services/Category';
<<<<<<< HEAD
/**
* @export
* @class represents an item that was viewed
* 
*/
=======

/**
 * The Viewmodel for the History page
 *
 * @export
 * @class HistoryViewModel
 */
>>>>>>> origin/dev
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
<<<<<<< HEAD
  /**
  * @constructor - stores data locally that matches recent searches
  * @this {function} - represents current storage of items
  * @return {string} - returns list of history
  */
=======

    /**
     * Creates an instance of HistoryViewModel.
     *
     * @param {IStorageService} storageService - checks storage of local data
     */
>>>>>>> origin/dev
    constructor(storageService:IStorageService){
        this._myStorage = storageService;
        if (this._myStorage.contain(Category.History.toString())){
            
        }
        this._list = this.getHistoryList();
    }
<<<<<<< HEAD
   /**
* @function - gets the history searched items
* 
* @return {string} - returns matching data
*/
=======

    /**
     * Gets the history of listed items
     *
     * @returns {IListItem[]} - listed items in HistoryList
     */
>>>>>>> origin/dev
    getHistoryList():IListItem[]{
        return this._myStorage.get(Category.History.toString());
    }
    
}
