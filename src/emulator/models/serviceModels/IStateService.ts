import {IApp} from './../dataModels/IApp';
import {IPage} from "../dataModels/IPage";
import {IElement} from "../dataModels/IElement";

/**
 *
 */
export interface IStateService{
    /**
     * [_app description]
     * @type {IApp}
     */
    _app:IApp;

    /**
     * [getCurrentPage description]
     * @method getCurrentPage
     * @return {IPage}        [description]
     */
    getCurrentPage():IPage;

    /**
     * [getCurrentPageName description]
     * @method getCurrentPageName
     * @return {string}           [description]
     */
    getCurrentPageName():string;

    /**
     * [getStartPageName description]
     * @method getStartPageName
     * @return {string}         [description]
     */
    getStartPageName():string;

    /**
     * [setCurrentPageName description]
     * @method setCurrentPageName
     * @param  {string}           name [description]
     * @return {[type]}                [description]
     */
    setCurrentPageName(name:string);

    /**
     * [getPages description]
     * @method getPages
     * @return {Array<IPage>} [description]
     */
    getPages():Array<IPage>;

    /**
     * [getPage description]
     * @method getPage
     * @param  {string} name [description]
     * @return {IPage}       [description]
     */
    getPage(name:string ):IPage;

    /**
     * [element description]
     * @type {IElement}
     */
    getAppCallBack:(element:IElement,targetElementInfo?:string)=>void;

    /**
     * [element description]
     * @type {IElement}
     */
    emulatorCentralCallBack:(element:IElement,targetElementInfo?:string)=>void;
}
