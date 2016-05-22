import {IListItem} from '../Models/IListItem'
import {IStorageService} from '../../../Emulator/TS/Services/IStorageService';
import {Category} from '../../../Emulator/TS/Services/Category';

export class RecommendViewModel{
    _myStorage:IStorageService;
    _list:IListItem[];
    
    constructor(storageService:IStorageService){
        this._myStorage = storageService;
        if (this._myStorage.contain(Category.Recommend.toString())){
            
        }
        this._list = this.getHistoryList();
    }
    
    getHistoryList():IListItem[]{
        return this._myStorage.get(Category.Recommend.toString());
    }
}