import {IListItem} from "./IListItem";
type elementType = "button"|"text"|"image"|"input"|"list";

/**
 * This represents the application interface in the browser.
 * Creates the interactive part of the application within the browser. 
 */
export interface IElement{
    /**
     * Creates the elements needed for interaction
     * @type {elementType} - gives the element type
     */
    type:elementType;

    /**
     * Provides the name for the elements
     * @type {string} - gives the element a name
     */
    name:string;

    /**
     * Provides the specific elements interaction type
     * @type {[type]} - provides the interaction type for the element if needed
     */
    targetElementID?:string;

    /**
     * Creates the listed item requested
     * @type {string} or {Array<IListItem>} - provides a string or already listed  * item
     */
    define:string|Array<IListItem>;
}
