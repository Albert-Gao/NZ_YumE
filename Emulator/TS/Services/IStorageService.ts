/**
 * This is the interface of the storage service
 * 
 * @export
 * @class MyLocalStorage
 */
export interface IStorageService {
    /**
     * Stores a string
     * 
     * @type {string}
     */
    key: number;
    /**
     * Assigns a value
     * 
     * @type {*}
     */
    value: any;

    /**
     * Saves the string to the assigned value
     * 
     * @param {string} [theKey] (description)
     * @param {*} [theValue] (description)
     */
    save(theKey?:string, theValue?:any):void
    
    /**
     * Retrieves the key/string
     * 
     * @param {string} theKey Used to locate value
     * @returns {*} Returns string assigned to value
     */
    get(theKey?: string): any

    /**
     * Removes the string/key
     * 
     * @param {string} [theKey] removes the string assigned to key
     */
    remove(theKey?: string):void

    /**
     * Checks to see if there is a string
     * 
     * @param {string} [theKey] checks for related key/string
     * @returns {boolean} returns true or false value
     */
    contain(theKey?: string): boolean
}