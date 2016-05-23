/**
 * This model represents items in the lists.
 * They all have identical properties.
 * 
 * @export
 * @interface ListItem
 */
export interface IListItem{
    /**
    *   Displays the picture of listed item
    *
    * @type {string}
    */
    picURL:string;
    /**
     * Displays the title of listed item
     * 
     * @type {string}
     */
    title:string;
    /**
     * Displays the address of listed item
     * 
     * @type {string}
     */
    address:string;
    /**
     * Displays the category of listed item
     * 
     * @type {string}
     */
    category:string;
    /**
     * Displays the URL of listed item
     * 
     * @type {string}
     */
    url:string;
}
