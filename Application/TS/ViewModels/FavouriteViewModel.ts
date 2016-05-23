/**
* This model represents the restaurant favourites.
* It will be used to store favourites data.
*/
import {IRestaurant} from '../Models/IRestaurant'
import {IStorageService} from '../../../Emulator/TS/Services/IStorageService';
import {Category} from '../../../Emulator/TS/Services/Category';
/**
* @export
* @class Favourite
*/
export class FavouriteViewModel {
    _myStorage: IStorageService;
    _list: IRestaurant[];

    /**
     * Creates an instance of FavouriteViewModel.
     * 
     * @param {IStorageService} storageService the injected Storage service.
     */
    constructor(storageService: IStorageService) {
        this._myStorage = storageService;
        if (this._myStorage.contain(Category.Favourite.toString())) {

        }
        this._list = this.getFavouriteList();
    }

    /**
     * Displays stored favourites
     * 
     * @returns {IRestaurant[]} return the detail of the restaurant as a object.
     */
    getFavouriteList(): IRestaurant[] {
        return this._myStorage.get(Category.Favourite.toString());
    }

    /**
     * Removes string from array.
     * @param {string} address use the address as a keyword to find the data need to delete.
     */
    remove(address: string) {
        let myList = this._list;
        for (let i in myList) {
            if (myList[i].address === address) {
                myList.splice(+i, 1);
            }
        }
        this._list = myList;
        this._myStorage.save(Category.Favourite.toString(), myList);
    }
}