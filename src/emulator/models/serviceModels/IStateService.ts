import {IApp} from './../dataModels/IApp';
import {IPage} from "../dataModels/IPage";
import {IElement} from "../dataModels/IElement";

/**
 * This represents the current state of the application.
 */
export interface IStateService{
    /**
     * This is the application
     * @type {IApp} - gives the application
     */
    _app:IApp;

    /**
     * Provides the current page from IPage
     * @method getCurrentPage
     * @return {IPage}        - returns values/layout of Ipage
     */
    getCurrentPage():IPage;

    /**
     * Provides the current page name
     * @method getCurrentPageName
     * @return {string}           - returns the name of current page
     */
    getCurrentPageName():string;

    /**
     * Provides the current page name
     * @method getStartPageName
     * @return {string}         - returns the name of start/home page
     */
    getStartPageName():string;

    /**
     * Sets the current page name to what was retrieved
     * @method setCurrentPageName
     * @param  {string}           name - sets the name to what was retrieved
     */
    setCurrentPageName(name:string);

    /**
     * Gets the page from the array of Ipages
     * @method getPages
     * @return {Array<IPage>} - returns the page that is retrieved from IPages
     */
    getPages():Array<IPage>;

    /**
     * Provides the name of the retrieved Ipage
     * @method getPage
     * @param  {string} name - gives the name to what was retrieved
     * @return {IPage}       - returns the IPage with the name
     */
    getPage(name:string ):IPage;

    /**
     * Provides elements needed for application
     * @type {IElement} - provides elements from IElement to the application
     */
    getAppCallBack:(element:IElement,targetElementInfo?:string)=>void;

    /**
     * Provides elements needed for emulator
     * @type {IElement} - provides elements from IElement
     */
    emulatorCentralCallBack:(element:IElement,targetElementInfo?:string)=>void;
}
