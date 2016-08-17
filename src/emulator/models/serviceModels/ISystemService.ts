import {IStateService} from "./IStateService";
import {ITemplatingService} from "./ITemplatingService";
import {IPage} from "../dataModels/IPage";

/**
 * This is the services provided by the system.
 */
export interface ISystemService{
    /**
     * Provides the service for IStateService
     * @type {IStateService} - gives the current state of the service
     */
    _stateService:IStateService;

    /**
     * Provides the template to present given information
     * @type {ITemplatingService} - gives the template for the information
     */
    _templatingService:ITemplatingService;

    /**
     * Removes current page
     * @method removeCurrentPageFromScreen
     */
    removeCurrentPageFromScreen();

    /**
     * Directs to specific page requested
     * @method goPage
     * @param  {string} name - name of the page that will be directed to
     */
    goPage(name:string);

    /**
     * Refreshes the current page
     * @method renewCurrentPage
     * @param  {string}        name - name of the page that needs to be refreshed
     */
    renewCurrentPage(name:string);

    /**
     * Sets the first page to start/homescreen
     * @method goStartPage
     * @return {[type]}    - returns the startup page
     */
    goStartPage();

    /**
     * Gives the structure of the pages to be presented
     * @method renderAllPages
     * @param  {string}       pageName - provides the page name
     * @return {[type]}                - returns rendered page
     */
    renderAllPages(page?:IPage);

    /**
     * Starts up the emulator to be executed and show splash screen
     * @method showSplashScreen
     */
    startEmulator();

    /**
     * Hides the splash screen after startup
     * @method hideSplashScreen
     */
    hideSplashScreen();

    /**
     * Gives the notification when an error occurs
     * @method showNotification
     * @param  {string}         text - error message
     */
    showNotification(text:string);
}
