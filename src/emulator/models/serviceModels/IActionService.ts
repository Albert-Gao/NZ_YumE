import {ISystemService} from "./ISystemService";
import {IPage} from "../dataModels/IPage";

/**
 * This represents the action service intermediate.
 * Provides the required services to present requested information.
 */
export interface IActionService{
    /**
     * Provides the bootup for the application
     * @type {ISystemService} - Provides the service needed to run the application
     */
    _systemService:ISystemService;

    /**
     * Allows searched pages to be navigated to
     * @method goPage
     * @param  {string} name - gives the name of the page that is visted
     * @return {[type]}      - returns the page that matches the name
     */
    goPage(name:string);

    /**
     * Provides an error message if page is not found/no input
     * @method showNotification
     * @param  {string}         words - gives an error message
     */
    showNotification(words:string);

    /**
     *
     * Provides the Yelp service to give details
     * @method callYelpSearchAPI
     * @param  {string}    keywords - gives keywords to identify what is searched
     * @param  {Function}  callback - provides a callback to execute the function
     */
    callYelpSearchAPI(keywords:string, callback:Function);

    /**
     * Provides the layout of the page to be shown
     * @method reRenderPage
     * @param  {IPage}          page - gives the requested formatted page
     */
    reRenderPage(page:IPage);

    /**
     * Saves searches to the local storage
     * @method saveToLocalStorage
     * @param  {string}           key   - provides way to recall from storage
     * @param  {string}           value - provides the searched item
     */
    saveToLocalStorage(key:string,value:string);

    /**
     * Retrieves searches from the local storage
     * @method getFromLocalStorage
     * @param  {string}            key - gives an identifier to search storage
     * @return {string}                - returns the search result
     */
    getFromLocalStorage(key:string):string;
}
