/**
 * (description)
 * 
 * @export
 * @class MyLocalStorage
 */
export interface IStorageService {
    /**
     * (description)
     * 
     * @type {string}
     */
    key: number;
    /**
     * (description)
     * 
     * @type {*}
     */
    value: any;

    /**
     * (description)
     */
    save(theKey?:string, theValue?:any):void

    /**
     * (description)
     * 
     * @param {string} theKey (description)
     * @returns {*} (description)
     */
    get(theKey?: string): any

    /**
     * (description)
     * 
     * @param {string} [theKey] (description)
     */
    remove(theKey?: string):void

    /**
     * (description)
     * 
     * @param {string} [theKey] (description)
     * @returns {boolean} (description)
     */
    contain(theKey?: string): boolean
}