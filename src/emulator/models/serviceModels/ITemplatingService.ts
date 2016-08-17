import {IPage} from './../dataModels/IPage'
import {IStateService} from "./IStateService";

/**
 * Provides the template to provide page and state of service
 */
export interface ITemplatingService{
    /**
     * Gives the current status of the service
     * @type {IStateService}
     */
    _stateService:IStateService;

    /**
     * Create the page 
     * @method createPage
     * @param  {IPage}    page - gives the IPage
     * @return {JQuery}        - returns a JQuery object with IPage
     */
    createPage(page:IPage):JQuery;

    /**
     * Saves the pages that are searched for, easier access later on
     * @method createPagesAndSave
     */
    createPagesAndSave();

    /**
     * Creates an object of the page layout
     * @method createLayout
     * @return {JQuery}     - returns a JQuery object of the page layout
     */
    createLayout():JQuery;

    /**
     * Removes the selected element from the DOM
     * @method removeElementFromDOM
     * @param  {string}             className - removes element
     */
    removeElementFromDOM(className:string);

    /**
     * Uses all given information to be presented in a JQuery object
     * @method createjQueryItem
     * @param  {string}         type         - provides the page/services
     * @param  {string>}}       attrs        - provides requested information
     * @param  {string}         styleClasses - provides class presentation
     * @param  {string}         text         - provides text of object
     * @return {JQuery}                      - returns a JQuery object
     */
    createjQueryItem(type:string,
                     attrs?:Array<{key:string,value:string}>,
                     styleClasses?:string,
                     text?:string): JQuery;
}
