import {IFunc} from "./IFunction";
import {IElement} from "./IElement";

/**
 *
 * 
 */
export interface IPage{
    /**
     * [name description]
     * @type {string}
     */
    name:string;

    /**
     * [rawLayout description]
     * @type {Array<IElement>}
     */
    rawLayout:Array<IElement>;

    /**
     * [JQuery description]
     * @type {[type]}
     */
    afterRenderLayout?:JQuery;

    /**
     * [callback description]
     * @type {Array<IFunc>}
     */
    callback:Array<IFunc>;
}
