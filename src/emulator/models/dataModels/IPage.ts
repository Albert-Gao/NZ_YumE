import {IFunc} from "./IFunction";
import {IElement} from "./IElement";

export interface IPage{
    name:string;
    rawLayout:Array<IElement>;
    afterRenderLayout?:JQuery;
    callback:Array<IFunc>;
}