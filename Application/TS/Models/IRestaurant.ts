import {IListItem} from './IListItem';

/**
 * This model represent the detail of restaurant.
 * It will used as a raw date of the detail page.
 * 
 * @export
 * @interface Restaurant
 * @extends {ListItem}
 */
export interface IRestaurant extends IListItem{
    /**
     * (description)
     * 
     * @type {number}
     */
    ratings:number;
    /**
     * (description)
     * 
     * @type {string}
     */
    phone:string;
    /**
     * (description)
     * 
     * @type {number}
     */
    longitude:number;
    /**
     * (description)
     * 
     * @type {number}
     */
    latitude:number;  
}