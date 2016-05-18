/**
 * This is a Model of item in the list.
 * They all have identical properties.
 * 
 * @export
 * @interface ListItem
 */
export interface IListItem{

    picURL:string;
    /**
     * (description)
     * 
     * @type {string}
     */
    title:string;
    /**
     * (description)
     * 
     * @type {string}
     */
    address:string;
    /**
     * (description)
     * 
     * @type {string}
     */
    category:string;
    /**
     * (description)
     * 
     * @type {string}
     */
    url:string;
}