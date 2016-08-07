import {IApp} from './../dataModels/IApp';
import {IPage} from "../dataModels/IPage";
import {IElement} from "../dataModels/IElement";

export interface IStateService{
    _app:IApp;
    getCurrentPage():IPage;
    getCurrentPageName():string;
    setCurrentPageName(name:string);
    getPages():Array<IPage>;
    getPage(name:string ):IPage;
    emulatorCentralCallBack(element:IElement,targetElementInfo?:string);
}
