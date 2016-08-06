import {IListItem} from "./IListItem";
type elementType = "button"|"text"|"image"|"input"|"list";
export interface IElement{
    type:elementType;
    name:string;
    targetElementID?:string;
    define:string|Array<IListItem>;
}