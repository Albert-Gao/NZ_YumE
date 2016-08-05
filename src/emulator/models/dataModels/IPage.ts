import {IFunc} from "./IFunction";

export interface IPage{
    name:string;
    layout:string;
    callback:Array<IFunc>;
}