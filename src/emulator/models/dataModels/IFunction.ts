/**
 * This represents the functional elements.
 * Provides the functionality of the elements.
 */
export interface IFunc {
    /**
     * Creates the function which is linked to the elements name
     * @type {string} - Provides the name of the element
     */
    bindToName: string;

    /**
     * Provides the specific string name depending on the target ID
     * @type {[type]} - Provides the target ID for the elements if needed
     */
    targetID?: string;

    /**
     * Provides the functionality for the elements
     * @type {Function} - Provides functionality to elements
     */
    callbackFunction:Function;
}
