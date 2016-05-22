import {IStorageService} from './IStorageService'

/**
 * (description)
 * 
 * @export
 * @class MyLocalStorage
 */
export class StorageService implements IStorageService {
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
     * Creates an instance of MyLocalStorage.
     * 
     * @param {string} theKey (description)
     * @param {*} theValue (description)
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
     * (description)
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
     * (description)
     * 
     * @param {string} [theKey] (description)
     * @returns {*} (description)
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
     * (description)
     * 
     * @param {string} [theKey] (description)
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
     * (description)
     * 
     * @param {string} [theKey] (description)
     * @returns {boolean} (description)
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