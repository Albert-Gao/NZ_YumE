import {IListItem} from '../Models/IListItem'

export class FindListViewModel {
    _list: IListItem[];
    _keyword: string;

    constructor(passinList?: IListItem[], keyword?: string) {
        if (passinList) {
            this._list = passinList;
        }
        if (keyword) {
            this._keyword = keyword;
        }
    }

    findByKeyword(keyWord?: string): IListItem[] {
        let myKeyWord: string;
        if (keyWord) {
            myKeyWord = keyWord;
        } else {
            myKeyWord = this._keyword;
        }
        let listItem: IListItem = {
            address: "12 The Octagon Dunedin 9016",
            category: "Gastro Pubs",
            picURL: "http://s3-media4.fl.yelpcdn.com/bphoto/TB3tqX9-k2EejwYM4PQayw/o.jpg",
            title: "Mac’s Brewbar",
            url: "http://m.yelp.com/biz/macs-brewbar-dunedin"
        };

        let list: IListItem[];
        list.push(listItem);
        list.push(listItem);

        this._list = list;
        return list;
    }
}