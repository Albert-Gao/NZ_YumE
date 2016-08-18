/**
 * This represents the listed items presented.
 * Provides the items requested by the user.
 */
export interface IListItem{
    /**
     * Gives the title of the serached item
     * @type {string} - Provides the title
     */
    title:string;

    /**
     * Gives the description of the searched item
     * @type {string} - Provides the description
     */
    description:string;

    /**
     * Gives the hyperlink to the searched item
     * @type {string} - Provides a hyperlink
     */
    url:string;
}
