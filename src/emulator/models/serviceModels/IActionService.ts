import {ISystemService} from "./ISystemService";
import {IPage} from "../dataModels/IPage";

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
     */
    showNotification(words:string);

    /**
     *
     * [callYelpSearchAPI description]
     * @method callYelpSearchAPI
     * @param  {string}          keywords [description]
     * @param  {Function}        callback [description]
     */
    callYelpSearchAPI(keywords:string, callback:Function);

    /**
     * [reRenderPage description]
     * @method reRenderPage
     * @param  {IPage}          page [description]
     */
    reRenderPage(page:IPage);

    /**
     * [saveToLocalStorage description]
     * @method saveToLocalStorage
     * @param  {string}           key   [description]
     * @param  {string}           value [description]
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
