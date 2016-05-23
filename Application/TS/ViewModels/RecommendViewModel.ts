import {IListItem} from '../Models/IListItem.ts'
import {IStorageService} from '../../../Emulator/TS/Services/IStorageService.ts';
import {Category} from '../../../Emulator/TS/Services/Category.ts';

/**
 * (description)
 * 
 * @export
 * @class RecommendViewModel
 */
export class RecommendViewModel {
    /**
     * (description)
     * 
     * @type {IStorageService}
     */
    _myStorage: IStorageService;
    /**
     * (description)
     * 
     * @type {IListItem[]}
     */
    _list: IListItem[];

    /**
     * Creates an instance of RecommendViewModel.
     * 
     * @param {IStorageService} storageService (description)
     */
    constructor(storageService: IStorageService) {
        this._myStorage = storageService;
        if (this._myStorage.contain(Category.Recommend.toString())) {

        }
        this._list = this.getHistoryList();
    }

    /**
     * (description)
     * 
     * @returns {IListItem[]} (description)
     */
    getHistoryList(): IListItem[] {
        //return this._myStorage.get(Category.Recommend.toString());
        let listItem: IListItem = {
            address: "12 The Octagon Dunedin 9016",
            category: "Gastro Pubs",
            picURL: "http://s3-media4.fl.yelpcdn.com/bphoto/TB3tqX9-k2EejwYM4PQayw/o.jpg",
            title: "Mac’s Brewbar",
            url: "http://m.yelp.com/biz/macs-brewbar-dunedin"
        };

        let list: IListItem[] = [listItem,listItem];

        this._list = list;
        return list;
    }

}