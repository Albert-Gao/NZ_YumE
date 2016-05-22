/**
* This model represents the list view.
* It will be used to display listed restaurants. 
*/
import {IListItem} from '../Models/IListItem'
/**
* @export
* @class represents a string that shows listed items
*/
export class FindListViewModel {
    _list: IListItem[];
    _keyword: string;
/**
* (Displays listed restaurant data)
*
* @constructor
* @this {string} - list
* @this {string} - keyword
* @param {array} - to store and compare strings
*/
    constructor(passinList?: IListItem[], keyword?: string) {
        if (passinList) {
            this._list = passinList;
        }
        if (keyword) {
            this._keyword = keyword;
        }
    }
/**
* @function - to check strings are identical to fetch item
* @param {array} - to store and compare strings
* @this {string} - keyword
* @this {string} - list
* @return (string) - list that matched keyword
*/
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