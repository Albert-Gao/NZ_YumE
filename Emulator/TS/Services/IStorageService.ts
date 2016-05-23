/**
<<<<<<< HEAD
 * This is the interface of the storage service
=======
 * This is the interface of the storage service
>>>>>>> origin/dev
 * 
 * @export
 * @class MyLocalStorage
 */
export interface IStorageService {
    /**
<<<<<<< HEAD
     * Stores a string
=======
     * Stores a string
>>>>>>> origin/dev
     * 
     * @type {string}
     */
    key: number;
    /**
<<<<<<< HEAD
     * Assigns a value
=======
     * Assigns a value
>>>>>>> origin/dev
     * 
     * @type {*}
     */
    value: any;
    /**
<<<<<<< HEAD
     * Saves the string to the assigned value
     */
    save(theKey?:string, theValue?:any):void
    /**
     * Retrieves the key/string
     * 
     * @param {string} theKey (Used to locate value)
     * @returns {*} (Returns string assigned to value)
=======
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
>>>>>>> origin/dev
     */
    get(theKey?: string): any

    /**
<<<<<<< HEAD
     * Removes the string/key
     * 
     * @param {string} [theKey] (removes the string assigned to key)
=======
     * Removes the string/key
     *
     * @param {string} [theKey] removes the string assigned to key
>>>>>>> origin/dev
     */
    remove(theKey?: string):void

    /**
<<<<<<< HEAD
     * Checks to see if there is a string
     * 
     * @param {string} [theKey] (checks for related key/string)
     * @returns {boolean} (returns true or false value)
=======
     * Checks to see if there is a string
     *
     * @param {string} [theKey] checks for related key/string
     * @returns {boolean} returns true or false value
>>>>>>> origin/dev
     */
    contain(theKey?: string): boolean
}
