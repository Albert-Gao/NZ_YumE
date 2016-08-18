import {IPage} from './IPage';
import {IActionService} from "../serviceModels/IActionService";

/**
 * This represents the application interface.
 * Creates the interactive part of the application.
 */
export interface IApp {
    /**
     * Provides the title of the application
     * @type {string} - gives the title of the application 
     */
    title: string;

    /**
     * Provides the current page number that the user is currently on
     * @type {string} - gives the current page number
     */
    currentPageName: string;

    /**
     * Provides a starting page for the user
     * @type {string} - gives the starting page name
     */
    startPageName: string;

    /**
     * Provides the information for the searched page/restaurant
     * @type {Array<IPage>} - gives relevant page information from the array
     */
    pages: Array<IPage>;

    /**
     * Provides a relay back to the application from the browser
     * @method injectActionService
     * @param  {IActionService}    as - allows the service to be executed
     * @return {[type]}               - returns the service
     */
    injectActionService(as: IActionService);

    /**
     * Adds pages to the interface
     * @method startAddingPages
     * @return {[type]}         - returns the pages to the interface
     */
    startAddingPages();

    /**
     * Provides the interaction between the application and the browser
     * @method CentralCallbackFunc
     * @param  {string}         pageName  - provides the page name
     * @param  {string}         elementID - provides specific element requested
     * @return {[type]}                   - return information to the browser
     */
    CentralCallbackFunc(pageName: string, elementID:string, targetElementID?: string);
}
