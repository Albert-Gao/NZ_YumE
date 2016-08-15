import {ISystemService} from "./ISystemService";

/**
 *
 */
export interface IActionService{
    /**
     * [_systemService description]
     * @type {ISystemService}
     */
    _systemService:ISystemService;

    /**
     * [goPage description]
     * @method goPage
     * @param  {string} name [description]
     * @return {[type]}      [description]
     */
    goPage(name:string);

    /**
     * [showNotification description]
     * @method showNotification
     * @param  {string}         words [description]
     * @return {[type]}               [description]
     */
    showNotification(words:string);

    /**
     * [saveToLocalStorage description]
     * @method saveToLocalStorage
     * @param  {string}           key   [description]
     * @param  {string}           value [description]
     * @return {[type]}                 [description]
     */
    saveToLocalStorage(key:string,value:string);

    /**
     * [getFromLocalStorage description]
     * @method getFromLocalStorage
     * @param  {string}            key [description]
     * @return {string}                [description]
     */
    getFromLocalStorage(key:string):string;
}
