import {IStorageService} from './IStorageService'

/**
 * (Allows for storage of data)
 * 
 * @export
 * @class MyLocalStorage
 */
export class StorageService implements IStorageService {
    /**
     * (stores key number)
     * 
     * @type {string}
     */
    key: number;
    /**
     * (stores a value)
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
     * (Stores the key that corresponds with assigned value)
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
     * (gets the string)
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
     * (removes the string)
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
     * (boolean if string matches)
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