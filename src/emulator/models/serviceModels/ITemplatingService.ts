import {IPage} from './../dataModels/IPage'
import {IStateService} from "./IStateService";

/**
 *
 */
export interface ITemplatingService{
    /**
     * [_stateService description]
     * @type {IStateService}
     */
    _stateService:IStateService;

    /**
     * [createPage description]
     * @method createPage
     * @param  {IPage}    page [description]
     * @return {JQuery}        [description]
     */
    createPage(page:IPage):JQuery;

    /**
     * [createPagesAndSave description]
     * @method createPagesAndSave
     */
    createPagesAndSave();

    /**
     * [createLayout description]
     * @method createLayout
     * @return {JQuery}     [description]
     */
    createLayout():JQuery;

    /**
     * [removeElementFromDOM description]
     * @method removeElementFromDOM
     * @param  {string}             className [description]
     */
    removeElementFromDOM(className:string);

    /**
     * [createjQueryItem description]
     * @method createjQueryItem
     * @param  {string}         type         [description]
     * @param  {string>}}       attrs        [description]
     * @param  {string}         styleClasses [description]
     * @param  {string}         text         [description]
     * @return {JQuery}                      [description]
     */
    createjQueryItem(type:string,
                     attrs?:Array<{key:string,value:string}>,
                     styleClasses?:string,
                     text?:string): JQuery;
}
