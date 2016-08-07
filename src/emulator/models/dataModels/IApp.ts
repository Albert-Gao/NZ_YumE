import {IPage} from './IPage';

export interface IApp{
    title:string;
    currentPageName:string;
    pages:Array<IPage>;
    CentralCallbackFunc:(pageName:string, elementID?:string)=>void;
}