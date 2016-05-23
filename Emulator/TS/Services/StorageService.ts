import {IStorageService} from './IStorageService.ts'

/**
 * Allows for storage of data
 * 
 * @export
 * @class MyLocalStorage
 */
export class StorageService implements IStorageService {
    /**
     * stores key number
     * 
     * @type {string}
     */
    key: number;
    /**
     * stores a value
     * 
     * @type {*}
     */
    value: any;
    /**
     * Creates an instance of MyLocalStorage.
     * 
     * @param {string} theKey (this.key)
     * @param {*} theValue (this.value)
     */
    constructor(theKey?: number, theValue?: any) {
        if (theKey) {
            this.key = theKey;
        }
        if (theValue) {
            this.value = theValue;
        }
    }

    /**
     * Stores the key that corresponds with assigned value
     *
     * @param {string} [theKey] (description)
     * @param {*} [theValue] (description)
     */
    save(theKey?: string, theValue?: any) {
        let myKey: string;
        let myValue: any;
        if (theKey) {
            myKey = theKey;
        } else {
            myKey = this.key.toString();
        }
        if (theValue) {
            myValue = theValue;
        } else {
            myValue = this.value;
        }
        localStorage.setItem(myKey, myValue);
    }

    /**
     * Gets the string that corresponds with assigned key
     * 
     * @param {string} theKey (this.key)
     * @returns {*} (myKey)
     */
    get(theKey?: string): any {
        let myKey: string;
        if (theKey) {
            myKey = theKey;
        } else {
            myKey = this.key.toString();
        }
        if (localStorage.getItem(myKey) != null) {
            return localStorage.getItem(myKey);
        }
    }

    /**
     * Removes the string that corresponds with assigned key
     * 
     * @param {string} [theKey] (this.key)
     */
    remove(theKey?: string) {
        let myKey: string;
        if (theKey) {
            myKey = theKey;
        } else {
            myKey = this.key.toString();
        }
        if (localStorage.getItem(myKey) != null) {
            localStorage.removeItem(myKey);
        }
    }

    /**
     * Boolean value to check if key is equal to string
     * 
     * @param {string} [theKey] (this.key)
     * @returns {boolean} (this.key)
     */
    contain(theKey?: string): boolean {
        let myKey: string;
        if (theKey) {
            myKey = theKey.toString();
        } else {
            myKey = this.key.toString();
        }
        if (localStorage.getItem(myKey) === null) {
            return false;
        } else {
            return true;
        }
    }
}
