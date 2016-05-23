/**
* This model represents the recommended restaurants.
* It will be used to show listed items that are relavent to location. 
*/
import {IListItem} from '../Models/IListItem'
import {IStorageService} from '../../../Emulator/TS/Services/IStorageService';
import {Category} from '../../../Emulator/TS/Services/Category';
<<<<<<< HEAD
/**
* @export
* @class represents an item that is recommended
* 
*/
=======

/**
 * The Viewmodel of the Recommended page
 *
 * @export
 * @class RecommendViewModel
 */
>>>>>>> origin/dev
export class RecommendViewModel{
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
* @constructor - matches speech and string
* @param {array} - matches storage to string
* @this {string} - value equals storage
* @this {string} - list is saved to history
*/
=======

    /**
     * Creates an instance of RecommendViewModel.
     *
     * @param {IStorageService} storageService - checks storage for local data
     */
>>>>>>> origin/dev
    constructor(storageService:IStorageService){
        this._myStorage = storageService;
        if (this._myStorage.contain(Category.Recommend.toString())){
            
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
     * @returns {IListItem[]} - list items in HistoryList
     */
>>>>>>> origin/dev
    getHistoryList():IListItem[]{
        return this._myStorage.get(Category.Recommend.toString());
    }
    
}
