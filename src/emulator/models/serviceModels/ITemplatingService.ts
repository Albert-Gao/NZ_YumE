import {IPage} from './../dataModels/IPage'
import {IStateService} from "./IStateService";

export interface ITemplatingService{
    _stateService:IStateService;
    createPage(page:IPage):JQuery;
    createPagesAndSave();
    createLayout():JQuery;
    removeElementFromDOM(className:string);
    createjQueryItem(type:string,
                     attrs?:Array<{key:string,value:string}>,
                     styleClasses?:string,
                     text?:string): JQuery;
}