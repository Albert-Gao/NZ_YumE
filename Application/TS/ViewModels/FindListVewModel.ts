/**
* This model represents the list view.
* It will be used to display listed restaurants. 
*/
import {IListItem} from '../Models/IListItem'
<<<<<<< HEAD
/**
* @export
* @class represents a string that shows listed items
*/
=======

/**
 * This is the ViewModel for the result page of find list.
 *
 * @export
 * @class FindListViewModel
 */
>>>>>>> origin/dev
export class FindListViewModel {
    /**
     * private property of list
     *
     * @type {IListItem[]}
     */
    _list: IListItem[];
    /**
     * private property of keywords
     *
     * @type {string}
     */
    _keyword: string;
<<<<<<< HEAD
/**
* Displays listed restaurant data
*
* @constructor
* @this {string} - list
* @this {string} - keyword
* @param {array} - to store and compare strings
*/
=======

    /**
     * Creates an instance of FindListViewModel.
     *
     * @param {IListItem[]} [passinList] the pass-in parameter as a list
     * @param {string} [keyword] the keyword want to find
     */
>>>>>>> origin/dev
    constructor(passinList?: IListItem[], keyword?: string) {
        if (passinList) {
            this._list = passinList;
        }
        if (keyword) {
            this._keyword = keyword;
        }
    }
<<<<<<< HEAD
/**
* @function - to check strings are identical to fetch item
* @param {array} - to store and compare strings
* @this {string} - keyword
* @this {string} - list
* @return (string) - list that matched keyword
*/
=======

    /**
     * find the result by keyword.
     *
     * @param {string} [keyWord] the keyword want to find.
     * @returns {IListItem[]} return the result as a list.
     */
>>>>>>> origin/dev
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
