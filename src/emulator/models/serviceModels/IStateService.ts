import {IApp} from './../dataModels/IApp';
import {IPage} from "../dataModels/IPage";
import {IElement} from "../dataModels/IElement";

export interface IStateService{
    _app:IApp;
    getCurrentPage():IPage;
    getPage(name:string ):IPage;
    getPageCallbacks(pageName:string):Array<{any:any;}>;
    getPageCallback(pageName:string, elementID:string):Array<{any:any}>;
    emulatorCentralCallBack(element:IElement,targetElementInfo?:string);
}
