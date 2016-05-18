import {IListItem} from '../Models/IListItem'
import {IStorageService} from '../../../Emulator/TS/Services/IStorageService';
import {Category} from '../../../Emulator/TS/Services/Category';

export class HistoryViewModel{
    _myStorage:IStorageService;
    _list:IListItem[];
    
    constructor(storageService:IStorageService){
        this._myStorage = storageService;
        if (this._myStorage.contain(Category.History.toString())){
            
        }
        this._list = this.getHistoryList();
    }
    
    getHistoryList():IListItem[]{
        return this._myStorage.get(Category.History.toString());
    }
    
}