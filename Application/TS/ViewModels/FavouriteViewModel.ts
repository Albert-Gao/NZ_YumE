import {IRestaurant} from '../Models/IRestaurant'
import {IStorageService} from '../../../Emulator/TS/Services/IStorageService';
import {Category} from '../../../Emulator/TS/Services/Category';

export class FavouriteViewModel {
    _myStorage: IStorageService;
    _list: IRestaurant[];

    constructor(storageService: IStorageService) {
        this._myStorage = storageService;
        if (this._myStorage.contain(Category.Favourite.toString())) {

        }
        this._list = this.getFavouriteList();
    }

    getFavouriteList(): IRestaurant[] {
        return this._myStorage.get(Category.Favourite.toString());
    }

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