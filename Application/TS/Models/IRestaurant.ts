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
     * Displays the rating of listed object
     * 
     * @type {number}
     */
    ratings:number;
    /**
     * Displays the phone number of listed object
     * 
     * @type {string}
     */
    phone:string;
    /**
     * Displays the location (longitude) of listed object
     * 
     * @type {number}
     */
    longitude:number;
    /**
     * Displays the location (latitude) of listed object
     * 
     * @type {number}
     */
    latitude:number;  
}
