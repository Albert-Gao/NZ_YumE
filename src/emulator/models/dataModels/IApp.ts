import {IPage} from './IPage';

export interface IApp{
    title:string;
    page:Array<IPage>;
    currentPage:string;
}