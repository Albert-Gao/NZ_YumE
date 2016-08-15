import {IPage} from './IPage';
import {IActionService} from "../serviceModels/IActionService";

export interface IApp{
    title:string;
    currentPageName:string;
    startPageName:string;
    pages:Array<IPage>;
    injectActionService(as:IActionService);
    startAddingPages();
    CentralCallbackFunc(pageName:string, elementID?:string);
}
