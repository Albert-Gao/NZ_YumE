import {IPage} from './IPage';

export interface IApp{
    title:string;
    currentPage:string;
    pages:Array<IPage>;
    CentralCallbackFunc:{(pageName:string, elementID:string):any;};
}