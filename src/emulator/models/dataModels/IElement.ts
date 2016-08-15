import {IListItem} from "./IListItem";
type elementType = "button"|"text"|"image"|"input"|"list";

/**
 *
 * 
 */
export interface IElement{
    /**
     * [type description]
     * @type {elementType}
     */
    type:elementType;

    /**
     * [name description]
     * @type {string}
     */
    name:string;

    /**
     * [string description]
     * @type {[type]}
     */
    targetElementID?:string;

    /**
     * [string description]
     * @type {string} or {Array<IListItem>}
     */
    define:string|Array<IListItem>;
}
