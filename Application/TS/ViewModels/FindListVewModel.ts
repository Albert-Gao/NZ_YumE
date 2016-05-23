import {IListItem} from '../Models/IListItem.ts'

/**
 * This is the ViewModel for the result page of find list.
 *
 * @export
 * @class FindListViewModel
 */
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


    /**
     * Creates an instance of FindListViewModel.
     *
     * @param {IListItem[]} [passinList] the pass-in parameter as a list
     * @param {string} [keyword] the keyword want to find
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
