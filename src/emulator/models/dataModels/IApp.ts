import {IPage} from './IPage';
import {IActionService} from "../serviceModels/IActionService";

/**
 *
 * 
 */
export interface IApp{
    /**
     * [title description]
     * @type {string}
     */
    title:string;

    /**
     * [currentPageName description]
     * @type {string}
     */
    currentPageName:string;

    /**
     * [startPageName description]
     * @type {string}
     */
    startPageName:string;

    /**
     * [pages description]
     * @type {Array<IPage>}
     */
    pages:Array<IPage>;

    /**
     * [injectActionService description]
     * @method injectActionService
     * @param  {IActionService}    as [description]
     * @return {[type]}               [description]
     */
    injectActionService(as:IActionService);

    /**
     * [startAddingPages description]
     * @method startAddingPages
     * @return {[type]}         [description]
     */
    startAddingPages();

    /**
     * [CentralCallbackFunc description]
     * @method CentralCallbackFunc
     * @param  {string}            pageName  [description]
     * @param  {string}            elementID [description]
     * @return {[type]}                      [description]
     */
    CentralCallbackFunc(pageName:string, elementID?:string);
}
